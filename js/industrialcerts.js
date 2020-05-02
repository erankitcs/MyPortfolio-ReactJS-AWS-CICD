import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardIndustrialCerts from './card_industrycertificate'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:  1,
  },
  infotext:{
    'font-family': "'Poppins', Helvetica, sans-serif",
    'font-style': 'normal',
    'font-weight': 500 ,
    color: '#333333',
    'letter-spacing': '1px',
	  'line-height': '2.3em',
	  'text-decoration': 'none',
  },
  h3: {
     'padding-bottom': '7px',
     'font-size': '18px',
     'display': 'inline-block',
     'position': 'relative',
     '&::before': {
        display: 'block',
        position: 'absolute',
        content: 'close-quote',
        width: '100%',
        'background-color': '#f5f5f5',
        height: '4px',
        bottom: 0,
  },
   '&::after': {
     display:'block',
     position:'absolute',
     content: 'close-quote',
     width:'90px',
     'background-color':'#dd7114',
     height:'4px',
     bottom: 0 ,

  }
}}
));


export default function IndustrialCerts() {
  const classes = useStyles();
  return (
    <div id="IndustrialCerts" className={classes.root}>
      <div className={classes.infotext}>
      <div>
        <h3 className={classes.h3}>Industrial Certificates</h3>
      </div>
        <CardIndustrialCerts/>
      </div>
    </div>
  )

}
