interface AppSlice {
  params: SearchParams,
  states: AppStates
}

export type SearchParams = {
  q: string,
  units: UnitsOps,
  cnt: string,
}

export type AppStates = {
  generalLoading: boolean | string,
  unitLoading: boolean,
  errorSearch: boolean,
}

export type UnitsOps = 'metric' | 'imperial'

export default AppSlice