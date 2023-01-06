import WeatherSlice from '../interfaces/WeatherSlice'
import { v4 as uuidv4 } from 'uuid'

const dateAndTime = (newDate: Date) => {
  return {
    date: newDate.toLocaleDateString('en-US', {
      month: 'short',
      weekday: 'short',
      day: 'numeric'
    }),
    time: newDate.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    })
  }
}

const formatDateByTZ = (tz: number, dt: number) => {
  const newDate = (new Date(dt * 1000 - (tz * 1000)))
  return dateAndTime(newDate)
}

const formatDateByText = (dt_txt: string) => {
  const newDate = new Date(dt_txt)
  return dateAndTime(newDate)
}

const formatter = (info) => {
  // dates and time formater
  const date = info.dt_txt ? formatDateByText(info.dt_txt) : formatDateByTZ(info.timezone, info.dt)
  const { gust, ...restWindInfo } = info.wind

  return {
    id: info.id || uuidv4(),
    name: info.name || '',
    icon: `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`,
    details: {
      weather: info.weather[0].main,
      description: info.weather[0].description,
      temperature: Math.round(info.main.temp),
      humidity: info.main.humidity,
      wind: restWindInfo,
    },
    infoTime: date,
  }
}

const formatWeather = (infWeather, infForecast): WeatherSlice => {
  return {
    ...formatter(infWeather),
    forecast: infForecast.map(item => formatter(item))
  }
}

export default formatWeather