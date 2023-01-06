interface AppSlice {
  params: SearchParams,
  states: AppStates
}

export interface SearchParams {
  q: string,
  units: UnitsOps | string,
  cnt: string,
}

export type AppStates = {
  generalLoading: boolean | string,
  unitLoading: boolean,
  errorSearch: boolean,
}

export type UnitsOps = 'metric' | 'imperial'

export default AppSlice