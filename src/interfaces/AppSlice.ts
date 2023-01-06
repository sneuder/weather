interface AppSlice {
  params: SearchParams,
  states: AppStates
}

export type SearchParams = {
  q: string,
  units: UnitsOps,
  cnt: number,
}

export type AppStates = {
  generalLoading: boolean,
  unitLoading: boolean,
  errorSearch: boolean,
}

export type UnitsOps = 'metric' | 'imperial'

export default AppSlice