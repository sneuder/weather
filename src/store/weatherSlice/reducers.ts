import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import WeatherSlice from '../../interfaces/WeatherSlice'
import { DataWeather } from '../../interfaces/shared'

const updateWeather: CaseReducer<WeatherSlice, PayloadAction<WeatherSlice>> = (state, action) => {
  return action.payload
}

const updateFocusedWeather: CaseReducer<WeatherSlice, PayloadAction<DataWeather>> = (state, action) => {
  return {
    ...action.payload,
    forecast: state.forecast
  }
}

export default {
  updateWeather,
  updateFocusedWeather
}