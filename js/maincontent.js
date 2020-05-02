import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:
  {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(34),
    height: theme.spacing(34),
  },
  infotext:{
    'margin-top': theme.spacing(5),
    'font-family': "'Poppins', Helvetica, sans-serif",
    'font-size': '14px',
    'font-weight': 600,
    'font-style': 'normal',
    color: '#333333',
    'letter-spacing': '0px',
	  'line-height': '2.3em',
	  'text-decoration': 'none',
	  //'opacity': .85
  },
  maincontent:{
    //margin: theme.spacing(2),
    'font-size': '16px',
  },
  h4:{
    color: "#dd7114",
  },
  p:{
    'font-family': "'Poppins', Helvetica, sans-serif",
    'font-size': '14px',
    'font-weight': 400,
    'font-style': 'normal',
    'line-height': '1.75em',
    color: '#666666',
  }
}));

export default function MainContent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container>
    <Grid item xs={12} sm={4}>
    <div id="maincontent" className={classes.maincontent}>

        <div className={classes.root}>
          <Avatar alt="Ankit Pic" src="images/ankit_dp1.jpg" className={classes.large} />
        </div>
    </div>
    </Grid>
    <Grid item xs={12} sm={8}>
          <div className={classes.infotext}>
          <h1>Ankit Kumar Singh</h1>
          <h4 className={classes.h4}> Passionate about Data Science and Curious for Cloud Technology</h4>
          <p className={classes.p}>
          Welcome to my portfolio, I am experienced senior analyst engineer with a demonstrated history of working in the information technology and service industry.
          I am skilled in leading cloud services like AWS, Azure and proficient in programming languages like Java, Python along with backend services like Oracle database, MongoDB.
          I love to automate things in cloud and very much passionate about Data Science and web technology.
          </p>
        </div>
        </Grid>
      </Grid>
    </div>
  );
}
