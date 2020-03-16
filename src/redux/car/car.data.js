export const DATA = {
  carData: {
    name: {
      type: 'text',
      label: 'Назва',
      value: '',
      adornment:''
    },
    liters_per_100km: {
      type: 'number',
      label: 'Л/100км',
      value: '',
      adornment: 'л'
    },
    cylinders:{
      type: 'number',
      label: 'Циліндрів',
      value: '',
      adornment: 'шт'
    },
    horsepower:{
      type: 'number',
      label: 'Потужність',
      value: '',
      adornment: 'л.с'
    },
    weight_in_kg:{
      type: 'number',
      label: 'Вага',
      value: '',
      adornment: 'кг'
    },
    acceleration:{
      type: 'number',
      label: 'Прискорення',
      value: '',
      adornment: 'сек'
    },
    year: {
      type: 'number',
      label: 'Рік випуску',
      value: '',
      adornment: 'р.в'
    },
    photo: {
      type: 'file',
      label: 'Фото',
      imageName: '',
      src: '',
      adornment: ''
    }
  },
  carsList: []
}