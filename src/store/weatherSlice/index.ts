import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

const searchSlice = createSlice({
  name: 'weather',
  initialState: {
    cityWeather: {}
  },
  reducers: reducers
})

export const { updateWeather } = searchSlice.actions
export default searchSlice.reducer