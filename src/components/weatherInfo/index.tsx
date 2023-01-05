import React,{ FC } from 'react'
import WeatherSlice from '../../interfaces/WeatherSlice'
import WrapperStatus from '../../shared/WeatherStatus'
import { Wrapper, Weather, Text, Temperature, BadgeTemp, WrapperGeneral, ProgressBar, ArrowIcon } from './elements'

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
      <Text>{name}, {infoTime.date}</Text>

      <WrapperStatus title={'Humidity'} measure={humidity} unit={'%'}>
        <ProgressBar max={'100'} value={humidity}/>
      </WrapperStatus>
      
      <WrapperStatus title={'Wind Status'} measure={wind.speed} unit={'k/h'}>
        <ArrowIcon deg={wind.deg} src={'https://www.reshot.com/preview-assets/icons/GPJQ8YVENZ/circle-arrow-left-GPJQ8YVENZ.svg'}/>
      </WrapperStatus>
    </Wrapper>
  )
}

export default WeatherInfo