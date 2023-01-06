import WeatherSlice from '../../interfaces/WeatherSlice'
import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

const state: WeatherSlice = {
  id: '',
  name: '',
  icon: '',
  details: {
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
}

const searchSlice = createSlice({
  name: 'weather',
  initialState: state,
  reducers: reducers
})

export const { updateWeather } = searchSlice.actions
export default searchSlice.reducer