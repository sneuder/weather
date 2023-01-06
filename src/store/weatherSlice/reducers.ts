import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import WeatherSlice from '../../interfaces/WeatherSlice'

const updateWeather: CaseReducer<WeatherSlice, PayloadAction<WeatherSlice>> = (state, action) => {
  return action.payload
}

const updateFocusedWeather: CaseReducer<WeatherSlice, PayloadAction<WeatherSlice>> = (state, action) => {
  return {
    ...action.payload,
    forecast: state.forecast
  }
}

export default {
  updateWeather,
  updateFocusedWeather
}