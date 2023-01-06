import { FC } from 'react'
import WeatherSlice from '../../interfaces/WeatherSlice'
import WrapperStatu from '../../shared/WeatherStatu'
import ProgressBar from '../../shared/progressBar'
import { Wrapper, Weather, Text, Temperature, BadgeTemp, WrapperGeneral, ArrowIcon, WrapperStatus } from './elements'

type Props = {
  infoCity: WeatherSlice,
  measures: {
    temperature: string,
    wind: string
  }
}

const WeatherInfo:FC<Props> = ({ infoCity, measures }) => {
  const {name, infoTime } = infoCity
  const {description, wind, weather, temperature, humidity} = infoCity.details

  return (
    <Wrapper>
      <WrapperGeneral>
        <Weather>{weather}</Weather>
        <Text>{description}</Text>
      </WrapperGeneral>

      <Temperature>{temperature}
        <BadgeTemp>{measures.temperature}</BadgeTemp>
      </Temperature>
      <WrapperGeneral>
        <Text>{name} - {infoTime.date}</Text>
        <Text>{infoTime.time}</Text>
      </WrapperGeneral>

      <WrapperStatus>
        <WrapperStatu title={'Humidity'} measure={humidity} unit={'%'}>
          <ProgressBar level={humidity}/>
        </WrapperStatu>
      
        <WrapperStatu title={'Wind Status'} measure={wind.speed} unit={measures.wind}>
          <ArrowIcon deg={wind.deg}/>
        </WrapperStatu>
      </WrapperStatus>
    </Wrapper>
  )
}

export default WeatherInfo