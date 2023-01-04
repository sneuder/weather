import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './weatherSlice'
import searchSlice from './searchSlice'

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    search: searchSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store