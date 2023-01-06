import useWeather from '../../hooks/useWeather'
import { Button } from './elements'

import units from '../../utils/getNewUnit'

const UnitButton = () => {
  const {changeUnit, unitLoading} = useWeather()
  return <Button onClick={changeUnit} disabled={unitLoading} loading={`${unitLoading}`}>{'C'}</Button>
}

export default UnitButton