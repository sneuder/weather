import { Forecast, Wind } from './shared'

interface WeatherSlice {
  cityWeather: {
    id: number,
    name: string,
    description: string,
    unitMmt: string,
    date: string,
    weather: string,
    temperature: number,
    humidity: number,
    wind: Wind,
    incon: string,
    forecaste: Array<Forecast>
  }
}

export default WeatherSlice