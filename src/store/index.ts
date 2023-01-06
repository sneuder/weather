import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './weatherSlice'
import appSlice from './appSlice'

const store = configureStore({
  reducer: {
    appState: appSlice,
    weather: weatherSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store