import Units from '../interfaces/Units'

const units: Units = {
  temperature: {
    metric: '°C',
    imperial: '°F'
  },
  wind: {
    metric: 'k/h',
    imperial: 'mph'
  },

  unitsOrder: ['imperial', 'metric']
}

export default units