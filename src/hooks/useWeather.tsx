// update the information and return the info
import { useRef, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWeather } from '../store/weatherSlice'
import { updateParam } from '../store/appSlice'

import handleWeather from '../utils/handleWeather'
import { handleParamsSearch, handleAppSearch } from '../utils/handleParams'

import { RootState } from '../store'

const useWeather = () => {
  // get name by referring
  const refSearch = useRef<HTMLInputElement>(null)

  const params = useSelector((state: RootState) => state.appState.params)
  const dispatch = useDispatch()
  
  const getWeatherByName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const name = refSearch.current?.value || ''
    const modifiedParam = handleParamsSearch(params, 'q', name)

    handleWeather(modifiedParam).then(data => {
      dispatch(updateWeather(data))
      dispatch(updateParam(handleAppSearch('q', modifiedParam.q)))
    })
  }

  // const changeUnit = () => {

  // }

  return {
    getWeatherByName,
    refSearch,
  }
}

export default useWeather