import { Forecasts, Wind } from './shared'

interface WeatherSlice {
  id: number,
  name: string,
  description: string,
  unitsMmt: string,
  date: {
    date: string,
    time: string,
  },
  weather: string,
  temperature: number,
  humidity: number,
  wind: Wind,
  icon: string,
  forecast: Array<Forecasts>
}

export default WeatherSlice