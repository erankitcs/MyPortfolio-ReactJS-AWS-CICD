import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  h3: {
    '&::before': {
        display: 'block',
        position: 'absolute',
        content: '',
        width: '100%',
        'background-color': '#f5f5f5',
        height: '2px',
        bottom: 0,
  }
  },
}));


export default function IndustrialCerts() {
  const classes = useStyles();
  return (
    <div id="IndustrialCerts" className={classes.root}>
      <div>
        <h3 className={classes.h3}>Industrial Certicates</h3>
      </div>
    </div>
  )

}
