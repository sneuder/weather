interface AppSlice {
  params: {
    q: string,
    units: string | UnitsOps,
    cnt: number
  },
  states: {
    generalLoading: boolean,
    unitLoading: boolean,
  }
}

export interface SearchParams {
  q: string,
  units: string,
  cnt: number,
}

export interface ParamsToUpdate {
  key: string,
  value: string,
}

type UnitsOps = 'metric' | 'imperial'

export default AppSlice