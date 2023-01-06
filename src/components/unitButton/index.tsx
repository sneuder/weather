import { FC } from 'react'
import useWeather from '../../hooks/useWeather'
import { Button } from './elements'

type Props = {
  measure: string
}

const UnitButton:FC<Props> = ({measure}) => {
  const {changeUnit, unitLoading} = useWeather()
  return <Button onClick={changeUnit} disabled={unitLoading} loading={`${unitLoading}`}>{measure}</Button>
}

export default UnitButton