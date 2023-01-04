import { Forecast, Wind } from './shared'

interface WeatherSlice {
  id: number,
  name: string,
  description: string,
  unitsMmt: string,
  date: string,
  weather: string,
  temperature: number,
  humidity: number,
  wind: Wind,
  icon: string,
  forecast: Array<Forecast>
}

export default WeatherSlice