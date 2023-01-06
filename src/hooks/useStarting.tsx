// used for getting information when the app is started
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWeather } from '../store/weatherSlice'
import { updateParam, updateStates } from '../store/appSlice'

import handleWeather from '../utils/handleWeather'
import defaultCountry from '../utils/defaultCountry'
import { handleParamsSearch, handleAppSettings } from '../utils/handleSettings'

import { RootState } from '../store'

const useStarting = () => {
  const params = useSelector((state: RootState) => state.appState.params)
  const infoCity = useSelector((state: RootState) => state.weather)
  const loadingGeneral = useSelector((state: RootState) => state.appState.states.generalLoading)

  const dispatch = useDispatch()

  const getDefaultWeather = () => {
    const modifedParams = handleParamsSearch(params, 'q', defaultCountry())
    const updatedParams = handleAppSettings('q', modifedParams.q)

    dispatch(updateStates(true))
    handleWeather(modifedParams).then(data => {
      dispatch(updateWeather(data))
      dispatch(updateParam(updatedParams))
      // for apreciation of loading cloud (api is too fast)
      setTimeout(() => dispatch(updateStates(false)), 500)
    })
  }

  useEffect(() => {
    getDefaultWeather()
  }, [])


  return {
    infoCity,
    loadingGeneral
  }
}

export default useStarting