import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import WeatherSlice from '../../interfaces/WeatherSlice'

const updateWeather: CaseReducer<WeatherSlice, PayloadAction<WeatherSlice>> = (state, action) => {
  state.cityWeather = action.payload.cityWeather
}

export default {
  updateWeather
}