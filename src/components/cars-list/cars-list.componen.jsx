import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import { removeCar } from '../../redux/car/car.actions';

import { generateID } from '../../redux/utils';

const createTableHeader = obj => {
  let carsArray = [];
  for (let key in obj) {
    carsArray.push({
      id: generateID(),
      label: obj[key].label
      
    });
  }
  carsArray = [...carsArray, { id: 'remove', label: 'Видалити' }];
  return carsArray;
};

const CarsList = props => {
  const { carsList, carData } = props;

  const tableHeader = createTableHeader(carData);

  return (
    <TableContainer component={Paper} style={{ margin: '50px' }}>
      <Table aria-label="simple table">
        <TableHead style={{ background: '#ccc' }}>
          <TableRow>
            {carsList.length > 0
              ? tableHeader.map(car => {
                  return (
                    <TableCell align="center" key={car.id}>
                      {car.label}
                    </TableCell>
                  );
                })
              : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {carsList.map(car => {
            return (
              <TableRow key={car.id}>
                <TableCell component="th" align="center" scope="row">
                  {car.name}
                </TableCell>
                <TableCell align="center">{car.liters_per_100km}</TableCell>
                <TableCell align="center">{car.cylinders}</TableCell>
                <TableCell align="center">{car.horsepower}</TableCell>
                <TableCell align="center">{car.weight_in_kg}</TableCell>
                <TableCell align="center">{car.acceleration}</TableCell>
                <TableCell align="center">{car.year}</TableCell>
                <TableCell align="center">
                  <img src={car.photo} style={{ height: '50px' }}></img>
                </TableCell>
                <TableCell align="center">
                  <Icon onClick={() => props.removeCar(car.id)}>delete</Icon>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = state => {
  return {
    carsList: state.car.carsList,
    carData: state.car.carData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeCar: carId => dispatch(removeCar(carId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
