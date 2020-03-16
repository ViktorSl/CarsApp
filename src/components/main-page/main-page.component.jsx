import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import AddCarForm from "../add-car-form/add-car-form.component";
import CarsList from "../cars-list/cars-list.componen";

const useStyles = makeStyles({
  container: {
    minHeight: 84 + 'vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

const MainPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header></Header>
      <Container maxWidth={false} alignitems='center' className={classes.container}>
        <AddCarForm></AddCarForm>
        <CarsList></CarsList>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default MainPage;
