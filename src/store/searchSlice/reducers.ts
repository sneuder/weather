import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import SearchSlice, { ParamsToUpdate } from '../../interfaces/SearchSlice'

const updateParam: CaseReducer<SearchSlice, PayloadAction<ParamsToUpdate>> = (state, action) => {
  const { key, value } = action.payload
  state[key] = value
}

export default {
  updateParam
}