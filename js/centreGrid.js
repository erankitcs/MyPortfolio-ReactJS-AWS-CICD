import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import MainContent from './maincontent';
import IndustrialCerts from './industrialcerts'

const useStyle = makeStyles((theme) => ({
  root:{
    flexGrow:  1,
  },
  paper:{
    padding: theme.spacing(5),
    margin: theme.spacing(3),
    textAlign: 'centre',
    color: theme.palette.text.secondary,
  },
}));
export default function CenterGrid() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Header />
            <MainContent />
            <IndustrialCerts/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
