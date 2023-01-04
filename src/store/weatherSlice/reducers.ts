import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import WeatherSlice from '../../interfaces/WeatherSlice'

// const updateWeather: CaseReducer<WeatherSlice, PayloadAction<WeatherSlice>> = (state, action) => {
//   return action.payload
// }

const updateWeather = (state: WeatherSlice, action: PayloadAction<WeatherSlice>) => {
  return action.payload
}

export default {
  updateWeather
}