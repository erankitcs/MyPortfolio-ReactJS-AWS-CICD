import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  }

}));

export default function CardIndustrialCerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
      <Grid item xs={6} sm={2}>
      <Avatar variant="square" className={classes.small}  src="images/AWS-Solution-Arch.png">
      </Avatar>
      </Grid>
      <Grid item xs={6} sm={2}>
      <Avatar variant="square" className={classes.small}  src="images/azure-fundamentals.png">
      </Avatar>
      </Grid>
      <Grid item xs={6} sm={2}>
      <Avatar variant="square" className={classes.small}  src="images/Mongo-DB.png">
      </Avatar>
      </Grid>
      </Grid>
    </div>

  );
}
