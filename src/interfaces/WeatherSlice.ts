import { DataWeather } from './shared'

export interface WeatherSlice extends DataWeather {
  forecast: Array<Forecasts>
}

type Forecasts = DataWeather