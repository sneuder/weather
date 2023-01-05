interface Units {
  temperature: UnitsOps,
  wind: UnitsOps,
  unitsOrder: ['imperial', 'metric']
}

export type UnitsOps = {
  metric: '°C' | 'k/h',
  imperial: '°F' | 'mph'
}

export default Units