import Units from '../interfaces/Units'

export const units: Units = {
  temperature: {
    'metric': '°C',
    'imperial': '°F'
  },
  wind: {
    metric: 'k/h',
    imperial: 'mph'
  },

  unitsOrder: ['imperial', 'metric']
}

const getNewUnit = () => {
  const newUnit = units.unitsOrder.shift()
  units.unitsOrder.push(newUnit)
  return newUnit
}

export default getNewUnit