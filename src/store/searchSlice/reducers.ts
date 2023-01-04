const updateParam = (state, action) => {
  const { key, value } = action.payload
  state[key] = value
}

export default {
  updateParam
}