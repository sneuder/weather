import { Wrapper, Weather, Text, Temperature, BadgeTemp, WrapperGeneral, ProgressBar, ArrowIcon } from './elements'
import WrapperStatus from '../../shared/WeatherStatus'
import units from '../../utils/units'
import WeatherSlice from '../../interfaces/WeatherSlice'
import { UnitsOps } from '../../interfaces/Units'
import { UnknownProps } from '../../interfaces/shared'

type Props = {
  infoCity: WeatherSlice | UnknownProps
}

const WeatherInfo = ({infoCity}:Props) => {
  const {weather, description, temperature, name, date, humidity, wind, unitsMmt} = infoCity
  const key: keyof UnitsOps = unitsMmt as any

  return (
    <Wrapper>
      <WrapperGeneral>
        <Weather>{weather}</Weather>
        <Text>{description}</Text>
      </WrapperGeneral>
      <Temperature>{temperature}
        <BadgeTemp>
          {units.temperature[key]}
        </BadgeTemp>
      </Temperature>
      <Text>{name}, {date.date}</Text>
      <WrapperStatus title={'Humidity'} measure={humidity} unit={'%'}>
        <ProgressBar max={'100'} value={humidity}/>
      </WrapperStatus>
      <WrapperStatus title={'Wind Status'} measure={wind?.speed} unit={units.wind[key]}>
        <ArrowIcon deg={wind.deg}src={'https://www.reshot.com/preview-assets/icons/GPJQ8YVENZ/circle-arrow-left-GPJQ8YVENZ.svg'}/>
      </WrapperStatus>
    </Wrapper>
  )
}

export default WeatherInfo