import { SearchParams } from '../interfaces/AppSlice'

export const handleParamsSearch = (original: SearchParams, key: string, value: string) => {
  return {
    ...original,
    [key]: value
  }
}