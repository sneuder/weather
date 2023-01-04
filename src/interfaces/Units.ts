interface Units {
  temperature: UnitsOps,
  wind: UnitsOps,
  unitsOrder: ['imperial', 'metric']
}

type UnitsOps = {
  metric: '°C' | 'k/h',
  imperial: '°F' | 'mph'
}

export default Units