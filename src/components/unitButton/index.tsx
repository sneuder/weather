import useSearch from "../../hooks/useSearch"
import { Button } from "./elements"

import units from "../../utils/units"

const UnitButton = () => {
  const {changeUnits, unit} = useSearch()
  return <Button onClick={changeUnits}>{units.temperature[unit]}</Button>
}

export default UnitButton