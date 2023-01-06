interface AppSlice {
  params: {
    q: string,
    units: string | UnitsOps,
    cnt: number
  },
  states: {
    generalLoading: boolean,
    unitLoading: boolean,
    errorSearch: boolean,
  }
}

export interface SearchParams {
  q: string,
  units: string,
  cnt: number,
}

type UnitsOps = 'metric' | 'imperial'

export default AppSlice