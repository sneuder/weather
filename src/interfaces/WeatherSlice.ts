import { DataWeather } from './shared'

interface WeatherSlice extends DataWeather {
  forecast: Array<Forecasts>
}

type Forecasts = DataWeather

export default WeatherSlice