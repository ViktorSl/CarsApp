import { carActionTypes } from './car.types';
import { generateID } from '../utils';

import { DATA } from './car.data';

const INITIAL_STATE = DATA;

const carReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case carActionTypes.ADD_CAR:
      return addCar(state, action.payload);

    case carActionTypes.REMOVE_CAR:
      return removeCar(state, action.payload);

    case carActionTypes.INPUT_CHANGE:
      return inputChange(state, action.payload);

    case carActionTypes.RESET_VALUES:
      return resetValues(state);

    default:
      return state;
  }
};

const resetValues = (state) => {
  const carDataCopy = { ...state.carData };
  for (let key in carDataCopy) {
    carDataCopy[key].value = '';
    carDataCopy[key].src = '';
  }
  return {
    ...state,
    carData: carDataCopy
  }
}

const addCar = (state, payload) => {

  const {
    name,
    liters_per_100km,
    cylinders,
    horsepower,
    weight_in_kg,
    acceleration,
    year,
    photo
  } = payload;

  const car = {
    id: generateID(),
    name: name.value,
    liters_per_100km: liters_per_100km.value,
    cylinders: cylinders.value,
    horsepower: horsepower.value,
    weight_in_kg: weight_in_kg.value,
    acceleration: acceleration.value,
    year: year.value,
    photo: photo.src
  };

  return {
    ...state,
    carsList: [...state.carsList, car]
  };
};

const removeCar = (state, payload) => {
  let carToRemoveId = payload;
  const newCarsList = state.carsList.filter(car => {
    return car.id !== carToRemoveId;
  });

  return {
    ...state,
    carsList: newCarsList
  };
};

const inputChange = (state, payload) => {
  let { type, event } = payload;
  let newCarData = { ...state.carData };

  if (type !== 'file') {
    newCarData[payload.id].value = event.currentTarget.value;
    return {
      ...state,
      carData: newCarData
    };
  } else {
    let image = event.target.files[0],
      reader = new FileReader();
    // newCarData[payload.id].imageName = image.name;

    reader.readAsDataURL(image);
    reader.onload = function() {
      newCarData[payload.id].src = reader.result;

      return {
        ...state,
        carData: newCarData
      };
    };
  }
  return {
    ...state
  };
};

export default carReducer;
