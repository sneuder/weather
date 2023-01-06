// used for getting information when the app is started
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWeather } from '../store/weatherSlice'
import { updateParam, updateStates } from '../store/appSlice'

import handleWeather from '../utils/handleWeather'
import defaultCountry from '../utils/defaultCountry'
import { handleParamsSearch } from '../utils/handleSettings'
import { units } from '../utils/getNewUnit'

import { RootState } from '../store'

const useStarting = () => {
  const params = useSelector((state: RootState) => state.appState.params)
  const infoCity = useSelector((state: RootState) => state.weather)
  const loadingGeneral = useSelector((state: RootState) => state.appState.states.generalLoading)

  const dispatch = useDispatch()

  const getDefaultWeather = () => {
    const modifedParams = handleParamsSearch(params, 'q', defaultCountry())

    dispatch(updateStates(['generalLoading', true]))
    handleWeather(modifedParams).then(data => {
      dispatch(updateWeather(data))
      dispatch(updateParam(['q', modifedParams.q]))
      // for apreciation of loading cloud (api is too fast)
      setTimeout(() => dispatch(updateStates(['generalLoading', false])), 500)
    })
  }

  const showCurrentUnits = () => {
    return {
      temperature: units.temperature[params.units],
      wind: units.wind[params.units]
    }
  }

  useEffect(() => {
    getDefaultWeather()
  }, [])


  return {
    infoCity,
    loadingGeneral,
    measures: showCurrentUnits()
  }
}

export default useStarting