// used for getting information when the app is started
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWeather } from '../store/weatherSlice'

import handleWeather from '../utils/handleWeather'
import defaultCountry from '../utils/defaultCountry'

import { RootState } from '../store'

const useStarting = () => {
  const params = useSelector((state: RootState) => state.appState.params)
  const dispatch = useDispatch()

  const getDefaultWeather = () => {
    const modifedParams = {
      ...params,
      q: defaultCountry(),
    }

    handleWeather(modifedParams).then(data => {
      dispatch(updateWeather(data))
    })
  }

  useEffect(() => {
    getDefaultWeather()
  }, [])
}

export default useStarting