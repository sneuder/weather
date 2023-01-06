import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import AppSlice from '../../interfaces/AppSlice'
import { SearchParams, AppStates } from '../../interfaces/AppSlice'

interface AppSliceExtended extends Omit<AppSlice, 'params'> {
  params: {
    [key: string]: unknown
  }
}

// fix the the never CaseReducer<AppSlice, PayloadAction<[string, string | number]>>
const updateParam = (state: AppSliceExtended, action: PayloadAction<[string, string | number]>) => {
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