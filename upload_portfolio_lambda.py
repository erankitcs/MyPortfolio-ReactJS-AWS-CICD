import boto3
from botocore.client import Config
from io import BytesIO
import io
import zipfile
import mimetypes

session = boto3.Session(profile_name='pythonAutomation')

s3 = session.resource('s3',config=Config(signature_version='s3v4'))

portfilo_bucket = s3.Bucket('ankit.techenvision.net')
build_bucket = s3.Bucket('portfoliobuildankit')

portfilo_zip = io.BytesIO()
build_bucket.download_fileobj('portfolio.zip', portfilo_zip)

with zipfile.ZipFile(portfilo_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfilo_bucket.upload_fileobj(obj, nm,
            ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
        portfilo_bucket.Object(nm).Acl().put(ACL='public-read')
