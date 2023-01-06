import { ParamsToUpdate } from '../interfaces/AppSlice'
import { ParamsUpdate } from '../interfaces/shared'

export const handleParamsSearch = (original, key: string, value: string) => {
  return {
    ...original,
    [key]: value
  }
}

// function for sending the value to update to the reducer
export const handleAppSettings = (key: string, value: string) => {
  const settings = {
    key: key,
    value: value
  }

  return settings
}