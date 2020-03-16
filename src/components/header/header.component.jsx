import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  console.log('theme = ', theme);
  return {
    header: {
      width: '100%',
      height: '100px',
      background: theme.palette.primary.main
    }
  }
});


const Header = () => {
  const classes = useStyles(); 
  return (
    <header className={classes.header}>

    </header>
  )
}

export default Header;