// fix secure api
import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = 'ce026dc549f7e825335d37270df52b23'

const axiosRequest = async (method: string, endPoint: string, params: {}) => {
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