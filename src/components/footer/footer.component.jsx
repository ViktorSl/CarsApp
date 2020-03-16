import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  console.log('theme = ', theme);
  return {
    footer: {
      width: '100%',
      height: '100px',
      background: theme.palette.primary.main
    }
  };
});

const Footer = () => {
  const classes = useStyles();

  return <footer className={classes.footer}></footer>;
};

export default Footer;
