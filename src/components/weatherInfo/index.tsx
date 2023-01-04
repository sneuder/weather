import { Wrapper, Weather, Text, Temperature, BadgeTemp, WrapperGeneral, ProgressBar } from './elements'
import WrapperStatus from '../../shared/WeatherStatus'
import units from '../../utils/units'

const WeatherInfo = ({infoCity}) => {
  const {weather, description, temperature, name, date, humidity, wind, unitsMmt} = infoCity

  return (
    <Wrapper>
      <WrapperGeneral>
        <Weather>{weather}</Weather>
        <Text>{description}
          
        </Text>
      </WrapperGeneral>
      <Temperature>{temperature}
        <BadgeTemp>
          {units.temperature[unitsMmt]}
        </BadgeTemp>
      </Temperature>
      <Text>{name}, {date}</Text>
      <WrapperStatus title={'Humidity'} text={humidity} unit={'%'}>
        <ProgressBar max={'100'} value={humidity}/>
      </WrapperStatus>
      <WrapperStatus title={'Wind Status'} text={wind?.speed} unit={units.wind[unitsMmt]}>

      </WrapperStatus>
    </Wrapper>
  )
}

export default WeatherInfo