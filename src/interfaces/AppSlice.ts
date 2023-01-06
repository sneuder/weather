interface AppSlice {
  params: SearchParams,
  states: AppStates
}

export interface SearchParams {
  q: string,
  units: UnitsOps,
  cnt: number | string,
}

export type AppStates = {
  generalLoading: boolean,
  unitLoading: boolean,
  errorSearch: boolean,
}

export type UnitsOps = 'metric' | 'imperial'

export default AppSlice