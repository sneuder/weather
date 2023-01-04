import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

const searchSlice = createSlice({
  name: 'weather',
  initialState: {},
  reducers: reducers
})

export const { updateWeather } = searchSlice.actions
export default searchSlice.reducer