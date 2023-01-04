import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateWeather } from '../store/weatherSlice'
import { updateParam } from '../store/searchSlice'

import axiosRequest from '../utils/axiosRequest'
import formatWeather from '../utils/formatWeather'
import defaultCountry from '../utils/defaultCountry'

import WeatherSlice from '../interfaces/WeatherSlice'
import { RootState } from '../store'

const useWeather = () => {
  const dispatch = useDispatch()
  
  const paramsSearch = useSelector((state: RootState) => state.search)
  const infoCity: any = useSelector((state: RootState) => state.weather)

  const weatherByName = async (auxiliarName?:string) => {
    if (paramsSearch.q === '') {
      return dispatch(updateParam({key: 'q', value: defaultCountry()}))
    }

    try {
      const cityWeather = await axiosRequest('GET', 'weather', paramsSearch)
      const cityForecast = await axiosRequest('GET', 'forecast', paramsSearch)
      const cityWeatherFormatted = formatWeather(cityWeather, cityForecast)
      dispatch(updateWeather(cityWeatherFormatted))
    } catch(e) {
      return dispatch(updateParam({key: 'q', value: auxiliarName}))
    }
    
  }
  
  useEffect(() => {
    const auxiliarName = infoCity.name
    dispatch(updateWeather({}))
    weatherByName(auxiliarName)
  }, [paramsSearch.q])

  useEffect(() => {
    weatherByName()
  }, [paramsSearch.units])

  return {
    infoCity,
    weatherByName,
  }
}

export default useWeather