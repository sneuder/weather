import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import AppSlice, { ParamsToUpdate } from '../../interfaces/AppSlice'
import { SearchParams } from '../../interfaces/AppSlice'

const updateParam: CaseReducer<AppSlice, PayloadAction<ParamsToUpdate>> = (state, action) => {
  const { key, value } = action.payload
  state.params[key as keyof SearchParams] = value
}

const updateStates: CaseReducer<AppSlice, PayloadAction<boolean>> = (state, action) => {
  state.states.generalLoading = action.payload
}

const updateLoadingUnit: CaseReducer<AppSlice, PayloadAction<boolean>> = (state, action) => {
  state.states.unitLoading = action.payload
}

export default {
  updateParam,
  updateStates,
  updateLoadingUnit
}