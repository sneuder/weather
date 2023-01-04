import axios from 'axios'
import SearchSlice from '../interfaces/SearchSlice'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

type EndPoints = 'weather' | 'forecast'

const axiosRequest = async (method: 'GET', endPoint: EndPoints, params: SearchSlice) => {
  const { data } = await axios({
    method: method,
    params: {
      appid: API_KEY,
      ...params
    },
    url: `${BASE_URL}${endPoint}`
  })

  data.unitsMmt = params.units
  return data
}

export default axiosRequest