import useSearch from '../../hooks/useSearch'
import { Button } from './elements'

import units from '../../utils/units'
import { UnitsOps } from '../../interfaces/Units'

const UnitButton = () => {
  const {changeUnits, unit} = useSearch()
  const key: keyof UnitsOps = unit as any
  return <Button onClick={changeUnits}>{units.temperature[key]}</Button>
}

export default UnitButton