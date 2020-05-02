import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
  root:{
    flexGrow:  1,
  },
  header:{
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    color: theme.palette.text.secondary,
    'padding-bottom': '40px',
  },
  headercontent:{
    color: theme.palette.text.secondary,
    'text-align': 'center',
  },
  logo: {
    color: theme.palette.text.secondary,
    width: 150,
  },
  mainmenuul:{
    position: 'relative',
    'list-style': 'none',
    margin: 0,
    padding: 0,
    'z-index': 99,
    'text-align': 'end',
  },
  mainmenuli:{
    display: 'inline-block',
    position: 'relative',
    color: '#333',
    'text-decoration' : 'none',
    'margin-right': '40px',
  },
  link:{
    'font-family': "'Poppins', Helvetica, sans-serif",
    'font-size': '14px',
    'font-weight': 400,
    'font-style': 'normal',
    color: '#333333',
    'letter-spacing': '0px',
	  'line-height': '2.3em',
	  'text-decoration': 'none',
	  'opacity': .55
  }

}));



export default function Header() {
  const classes = useStyle();
  return(

      <header class={classes.header}>
        <div class={classes.headercontent}>
        <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={3}>
          <div >
            <img class={classes.logo} src="images/logo-via-logohub.png" alt="My Portfolio Logo" />
          </div>
          </Grid>
          <Grid item xs={12} sm={8}>
          <ul class={classes.mainmenuul}>
            <li class={classes.mainmenuli}>
              <a class={classes.link} href="#">
              Portfolio
              </a>
            </li>
            <li class={classes.mainmenuli}>
              <a class={classes.link} href="#">
              Resume
              </a>
            </li>
            <li class={classes.mainmenuli}>
              <a class={classes.link} href="#">
              Contact
              </a>
            </li>
          </ul>
          </Grid>
        </Grid>
        </div>
        </div>
      </header>
  );
}
