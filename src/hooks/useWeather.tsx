// update the information and return the info
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWeather } from '../store/weatherSlice'
import { updateParam, updateStates, updateLoadingUnit } from '../store/appSlice'

import handleWeather from '../utils/handleWeather'
import { handleParamsSearch, handleAppSettings } from '../utils/handleSettings'
import getNewUnit from '../utils/getNewUnit'

import { RootState } from '../store'
import { OnSubmit} from '../interfaces/shared'

const useWeather = () => {
  // get name by referring
  const refSearch = useRef<HTMLInputElement>(null)

  const params = useSelector((state: RootState) => state.appState.params)
  const unitLoading = useSelector((state: RootState) => state.appState.states.unitLoading)
  const dispatch = useDispatch()
  
  const getWeatherByName: OnSubmit = (e) => {
    e.preventDefault()

    const name = refSearch.current?.value.trim().toLocaleLowerCase()
    if (name === '' || name === undefined) return
    const modifiedParam = handleParamsSearch(params, 'q', name)

    dispatch(updateStates(true))
    handleWeather(modifiedParam).then(data => {
      dispatch(updateWeather(data))
      dispatch(updateParam(handleAppSettings('q', modifiedParam.q)))
      // for apreciation of loading cloud (api is too fast)
      setTimeout(() => dispatch(updateStates(false)), 500)
    }).catch((e) => {
      // if no city is found, just keep the previous city
      setTimeout(() => dispatch(updateStates(false)), 500)
    })
  }

  const changeUnit = () => {
    if(unitLoading) return
    const newUnit = getNewUnit()
    const modifiedParam = handleParamsSearch(params, 'units', newUnit)

    dispatch(updateLoadingUnit(true))
    handleWeather(modifiedParam).then(data => {
      dispatch(updateWeather(data))
      dispatch(updateParam(handleAppSettings('q', modifiedParam.q)))
      setTimeout(() =>
      
        dispatch(updateLoadingUnit(false)), 500
      )
    })
  }

  return {
    getWeatherByName,
    changeUnit,
    refSearch,
    unitLoading
  }
}

export default useWeather