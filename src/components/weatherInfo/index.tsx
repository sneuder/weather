import React,{ FC } from 'react'
import WeatherSlice from '../../interfaces/WeatherSlice'
import WrapperStatu from '../../shared/WeatherStatu'
import { Wrapper, Weather, Text, Temperature, BadgeTemp, WrapperGeneral, ProgressBar, ArrowIcon, WrapperStatus } from './elements'

type Props = {
  infoCity: WeatherSlice
}

const WeatherInfo:FC<Props> = ({ infoCity }) => {
  const {name, infoTime } = infoCity
  const {description, wind, weather, temperature, humidity} = infoCity.details

  return (
    <Wrapper>
      <WrapperGeneral>
        <Weather>{weather}</Weather>
        <Text>{description}</Text>
      </WrapperGeneral>

      <Temperature>{temperature}
        <BadgeTemp>
          {'C'}
        </BadgeTemp>
      </Temperature>
      <Text>{name} - {infoTime.date}</Text>

      <WrapperStatus>
        <WrapperStatu title={'Humidity'} measure={humidity} unit={'%'}>
          <ProgressBar max={'100'} value={humidity}/>
        </WrapperStatu>
      
        <WrapperStatu title={'Wind Status'} measure={wind.speed} unit={'k/h'}>
          <ArrowIcon deg={wind.deg} src={'https://www.reshot.com/preview-assets/icons/GPJQ8YVENZ/circle-arrow-left-GPJQ8YVENZ.svg'}/>
        </WrapperStatu>
      </WrapperStatus>
    </Wrapper>
  )
}

export default WeatherInfo