import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Input from '../input/input.component';
import {
  addCar,
  inputChange,
  removeCar,
  resetValues
} from '../../redux/car/car.actions';

class AddCarForm extends React.Component {
  createCarsArray = obj => {
    const carsArray = [];
    for (let key in obj) {
      carsArray.push({
        id: key,
        config: obj[key]
      });
    }
    return carsArray;
  };

  useStyles = () => {
    return makeStyles(theme => ({
      form12: {
        width: '20em'
      }
    }));
  };

  addCarHandler = carData => {
    this.props.addCar(carData);
    this.props.resetValues();
  };

  render() {
    const classes = this.useStyles();
    const carsArray = this.createCarsArray(this.props.carData);

    return (
      <Grid item>
        <Grid item container style={{ width: '20em', marginTop: '50px' }}>
          <Typography variant="h3" style={{ lineHeight: 1 }}>
            {' '}
            ADD NEW CAR
          </Typography>
          {carsArray.map(car => {
            // console.log('car = ',  car);

            return (
              <Input
                key={car.id}
                type={car.config.type}
                label={car.config.label}
                style={{ width: '20em', marginTop: '5px' }}
                value={this.props.carData[car.id].value}
                fileName={car.config.imageName}
                adorment={car.config.adornment}
                changed={event =>
                  this.props.inputChange(event, car.config.type, car.id)
                }
              ></Input>
            );
          })}
          <Grid item container justify="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ marginTop: '10px' }}
              onClick={e => this.addCarHandler(this.props.carData)}
            >
              Додати
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    carData: state.car.carData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChange: (event, elementType, id) =>
      dispatch(inputChange(event, elementType, id)),
    addCar: car => dispatch(addCar(car)),
    resetValues: () => dispatch(resetValues())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCarForm);
