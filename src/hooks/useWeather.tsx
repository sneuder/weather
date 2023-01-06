// update the information and return the info
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWeather } from '../store/weatherSlice'
import { updateParam, updateStates } from '../store/appSlice'

import handleWeather from '../utils/handleWeather'
import { handleParamsSearch } from '../utils/handleSettings'
import getNewUnit from '../utils/getNewUnit'

import { RootState } from '../store'
import { OnSubmit} from '../interfaces/shared'
import { AxiosError } from 'axios'

const useWeather = () => {
  // get name by referring
  const refSearch = useRef<HTMLInputElement>(null)

  const params = useSelector((state: RootState) => state.appState.params)
  const {unitLoading, errorSearch} = useSelector((state: RootState) => state.appState.states)
  const dispatch = useDispatch()
  
  // get the weather by cityname, update search params, and loading state
  const getWeatherByName: OnSubmit = (e) => {
    e.preventDefault()

    const name = refSearch.current?.value.trim().toLocaleLowerCase()
    if (name === '' || name === undefined) return
    const modifiedParam = handleParamsSearch(params, 'q', name)

    dispatch(updateStates(['generalLoading', true]))
    handleWeather(modifiedParam).then(data => {
      dispatch(updateWeather(data))
      dispatch(updateParam(['q', name]))
      // for apreciation of loading cloud (api is too fast)
      setTimeout(() => dispatch(updateStates(['generalLoading', false])), 500)
    }).catch((_e:AxiosError) => {
      // if no city is found, just keep the previous city
      dispatch(updateStates(['errorSearch', true]))
      setTimeout(() => dispatch(updateStates(['generalLoading', false])), 500)
    })
  }

  // change the units for displaying, change the unitLoading state
  const changeUnit = () => {
    if(unitLoading) return
    const newUnit = getNewUnit()
    const modifiedParam = handleParamsSearch(params, 'units', newUnit)

    dispatch(updateStates(['unitLoading', true]))
    handleWeather(modifiedParam).then(data => {
      dispatch(updateWeather(data))
      dispatch(updateParam(['units', newUnit]))
      setTimeout(() => dispatch(updateStates(['unitLoading', false])), 500)
    })
  }

  // just remove error search
  const removeError = () => {
    if (errorSearch) dispatch(updateStates(['errorSearch', false]))
  }
  

  return {
    getWeatherByName,
    changeUnit,
    removeError,
    refSearch,
    unitLoading,
    errorSearch
  }
}

export default useWeather