import axios from 'axios'
import { EndPoints, SearchParams } from '../interfaces/shared'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const axiosRequest = async (method: 'GET', endPoint: EndPoints, params: SearchParams) => {
  const { data } = await axios({
    method: method,
    url: `${BASE_URL}${endPoint}`,
    params: {
      appid: API_KEY,
      ...params
    },
  })

  return data
}

export default axiosRequest