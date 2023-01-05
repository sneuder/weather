import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

const searchSlice = createSlice({
  name: 'weather',
  initialState: {
    id: '',
    name: '',
    icon: '',
    details: {
      measurement: '',
      weather: '',
      description: '',
      temperature: 0,
      humidity: 0,
      wind: {
        speed: 0,
        deg: 0,
      },
    },
    infoTime: {
      date: '',
      time: '',
    },
    forecast: []
  },
  reducers: reducers
})

export const { updateWeather } = searchSlice.actions
export default searchSlice.reducer