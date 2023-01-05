// used for getting information when the app is started
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWeather } from '../store/weatherSlice'
import { updateParam } from '../store/appSlice'

import handleWeather from '../utils/handleWeather'
import defaultCountry from '../utils/defaultCountry'
import { handleParamsSearch, handleAppSearch } from '../utils/handleParams'

import { RootState } from '../store'

const useStarting = () => {
  const params = useSelector((state: RootState) => state.appState.params)
  const infoCity = useSelector((state: RootState) => state.weather)
  const dispatch = useDispatch()

  const getDefaultWeather = () => {
    const modifedParams = handleParamsSearch(params, 'q', defaultCountry())
    const updatedParams = handleAppSearch('q', modifedParams.q)
    handleWeather(modifedParams).then(data => {
      dispatch(updateWeather(data))
      dispatch(updateParam(updatedParams))
    })
  }

  useEffect(() => {
    getDefaultWeather()
  }, [])


  return {
    infoCity
  }
}

export default useStarting