import { useRef, FormEvent } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateParam } from '../store/searchSlice'

import { RootState } from '../store'
import units from '../utils/units'

const useSearch = () => {
  const unit = useSelector((state: RootState) => state.search.units)
  const dispatch = useDispatch()
  const refSearch = useRef<HTMLInputElement>(null)

  const setSearchName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value:string = refSearch.current?.value.trim() as string
    if (value === '') return
    dispatch(updateParam({key: 'q', value: value}))
  }

  const changeUnits = () => {
    const value = units.unitsOrder.shift() as 'metric' | 'imperial'
    units.unitsOrder.push(value)
    dispatch(updateParam({key: 'units', value: value}))
  }

  return {
    refSearch,
    setSearchName,
    changeUnits,
    unit
  }
}

export default useSearch