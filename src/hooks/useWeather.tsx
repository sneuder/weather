import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { updateWeather } from '../store/weatherSlice';
import { updateParam } from '../store/searchSlice';

import axiosRequest from "../utils/axiosRequest"
import formatWeather from '../utils/formatWeather';
import defaultCountry from '../utils/defaultCountry';

const useWeather = () => {
  const dispatch = useDispatch()
  
  const paramsSearch = useSelector((state: any) => state.search)
  const infoCity = useSelector((state: any) => state.weather.cityWeather)

  const weatherByName = async (auxiliarName?:string) => {
    if (paramsSearch.q === '') {
      return dispatch(updateParam({key: 'q', value: defaultCountry()}))
    }

    try {
      const cityWeather = await axiosRequest('GET', 'weather', paramsSearch)
      const cityForecast = await axiosRequest('GET', 'forecast', paramsSearch)
      const cityWeatherFormatted:any = formatWeather(cityWeather, cityForecast)
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

export default useWeather;