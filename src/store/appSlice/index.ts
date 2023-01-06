import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'
import AppSlice from '../../interfaces/AppSlice'

const state: AppSlice = {
  params: {
    q: '',
    units: 'metric',
    cnt: 30,
  },
  states: {
    generalLoading: false,
    unitLoading: false,
  }
}

const appSlice = createSlice({
  name: 'appState',
  initialState: state,
  reducers: reducers
})

export const { updateParam, updateStates, updateLoadingUnit } = appSlice.actions
export default appSlice.reducer