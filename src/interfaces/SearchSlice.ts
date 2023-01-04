interface SearchSlice {
  q: string,
  units: string | UnitsOps
}

export interface ParamsToUpdate {
  key: 'q' | 'units',
  value: string | UnitsOps,
}

type UnitsOps = 'metric' | 'imperial'

export default SearchSlice