import boto3
from botocore.client import Config
from io import BytesIO
import io
import zipfile
import mimetypes
import os

def portfolio_deployer(event, context):
    portfolioBucket = os.environ['PORTFOLIO_BUCKET']
    codepipeline = boto3.client('codepipeline')
    try:
        job = event.get('CodePipeline.job')
        print(job)
        if job:
            for artifact in job['data']['inputArtifacts']:
                location = artifact['location']['s3Location']
        print("Building Portolio from " + str(location));
        s3 = boto3.resource('s3',config=Config(signature_version='s3v4'))
        portfilo_bucket = s3.Bucket(portfolioBucket)
        build_bucket = s3.Bucket(location["bucketName"])

        portfilo_zip = io.BytesIO()
        build_bucket.download_fileobj(location['objectKey'], portfilo_zip)

        with zipfile.ZipFile(portfilo_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfilo_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
                portfilo_bucket.Object(nm).Acl().put(ACL='public-read')
        print("Deploy complete.")
        codepipeline.put_job_success_result(jobId=job["id"])
    except:
        codepipeline.put_job_failure_result(jobId=job["id"],failureDetails={
                'type': 'JobFailed',
                'message': 'Lambda Build Failed.'
                })
        raise
