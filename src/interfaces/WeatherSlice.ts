import { DataWeather } from './shared'

interface WeatherSlice extends DataWeather {
  forecast: Array<Forecasts>
}

export type Forecasts = DataWeather

export default WeatherSlice