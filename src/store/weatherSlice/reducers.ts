const updateWeather = (state, action) => {
  state.cityWeather = action.payload
}

export default {
  updateWeather
}