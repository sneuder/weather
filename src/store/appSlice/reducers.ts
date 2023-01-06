import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import AppSlice from '../../interfaces/AppSlice'
import { SearchParams, AppStates, UnitsOps } from '../../interfaces/AppSlice'

// fix this, do not use never
const updateParam: CaseReducer<AppSlice, PayloadAction<[string, never | string]>> = (state, action) => {
  const [key, value] = action.payload
  state.params[key as keyof SearchParams] = value
}


const updateStates: CaseReducer<AppSlice, PayloadAction<[string, boolean]>> = (state, action) => {
  const [key, value] = action.payload
  state.states[key as keyof AppStates] = value
}

export default {
  updateParam,
  updateStates,
}