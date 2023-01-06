import { DataWeather } from '../interfaces/shared'
import { useDispatch } from 'react-redux'
import { updateFocusedWeather } from '../store/weatherSlice'

const useForecast = () => {
  const dispatch = useDispatch()

  const handleForcastChange = (weather: DataWeather) => {
    dispatch(updateFocusedWeather(weather))
    window.scroll({top: 0, behavior: 'smooth'})
  }

  return {
    handleForcastChange
  }
}

export default useForecast