import WeatherSlice from '../interfaces/WeatherSlice'
const generateUrlImage = (codeImg: string) => `https://openweathermap.org/img/wn/${codeImg}@2x.png`

const formatDate = (tz: number, dt: number) => {
  return (new Date(dt * 1000 - (tz * 1000))).toDateString()
}

const basicInformation = (infoCity) => {
  return {
    date: formatDate(infoCity.timezone, infoCity.dt),
    weather: infoCity.weather[0].main,
    temperature: Math.ceil(infoCity.main.temp),
    humidity: infoCity.main.humidity,
    wind: infoCity.wind,
    icon: generateUrlImage(infoCity.weather[0].icon),
  }
}

const formatForecast = ({ list }) => list.map((item) => basicInformation(item))

const formatWeather = (infoCity, infoForecast): WeatherSlice => {
  return {
    id: infoCity.id,
    name: infoCity.name,
    description: infoCity.weather[0].description,
    unitsMmt: infoCity.unitsMmt,
    ...basicInformation(infoCity),
    forecast: formatForecast(infoForecast)
  }
}

export default formatWeather