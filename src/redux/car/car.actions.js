import { carActionTypes } from './car.types';

export const addCar = car => ({
  type: carActionTypes.ADD_CAR,
  payload: car
});

export const removeCar = carId => ({
  type: carActionTypes.REMOVE_CAR,
  payload: carId
});

export const inputChange = (event, type, id) => ({
    type: carActionTypes.INPUT_CHANGE,
    payload: { event, type, id }
  })

export const resetValues = () => ({
  type: carActionTypes.RESET_VALUES
});
