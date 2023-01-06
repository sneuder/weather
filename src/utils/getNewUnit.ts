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

const getNewUnit = (): string => {
  const newUnit = units.unitsOrder[0]
  units.unitsOrder.reverse()
  return newUnit
}

export default getNewUnit