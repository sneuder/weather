// retrieve information, format the data, and return it
import axiosRequest from './axiosRequest'
import formatWeather from './formatWeather'
import { SearchParams } from '../interfaces/AppSlice'

const handleWeather = async (paramsSearch: SearchParams) => {
  const cityWeather = await axiosRequest('GET', 'weather', paramsSearch)
  const cityForecast = await axiosRequest('GET', 'forecast', paramsSearch)
  return formatWeather(cityWeather, cityForecast.list)
}

export default handleWeather