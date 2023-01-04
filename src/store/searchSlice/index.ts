import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    q: '',
    units: 'metric',
    cnt: 5
  },
  reducers: reducers
})

export const { updateParam } = searchSlice.actions
export default searchSlice.reducer