import WeatherSlice from '../interfaces/WeatherSlice'
import { v4 as uuidv4 } from 'uuid'

const generateUrlImage = (codeImg: string) => `https://openweathermap.org/img/wn/${codeImg}@2x.png`

const formatDate = (tz: number, dt: number) => {
  return (new Date(dt * 1000 - (tz * 1000))).toDateString()
}

const formatDateByText = (dt_txt: string) => {
  const newDate = new Date(dt_txt)
  const date = {
    time: newDate.toLocaleDateString(),
    date: newDate.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    }),
  }
  return date
}

const basicInformation = (infoCity) => {
  const date = infoCity.dt_txt ? formatDateByText(infoCity.dt_txt) : formatDate(infoCity.timezone, infoCity.dt)
  const { humidity, temp } = infoCity.main
  const { main, icon } = infoCity.weather[0]

  return {
    id: '',
    date: date,
    weather: main,
    temperature: Math.ceil(temp),
    humidity: humidity,
    wind: infoCity.wind,
    icon: generateUrlImage(icon),
  }
}

const formatForecast = ({ list }) => {
  return list.map((item) => {
    const formatted = basicInformation(item)
    formatted.id = uuidv4()
    return formatted
  })
}

const formatWeather = (infoCity, infoForecast): WeatherSlice => {
  return {
    ...basicInformation(infoCity),
    id: infoCity.id,
    name: infoCity.name,
    description: infoCity.weather[0].description,
    unitsMmt: infoCity.unitsMmt,
    forecast: formatForecast(infoForecast)
  }
}

export default formatWeather