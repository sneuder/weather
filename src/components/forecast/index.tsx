import { FC } from 'react'
import { Forecasts } from '../../interfaces/WeatherSlice'
import { Wrapper, ItemForecast, TitleDate, Time } from './elements'
import WeatherIcon from '../../shared/weatherIcon'

type ArrayForecast = {
  infoForecast: Array<Forecasts>
}

const Forecast: FC<ArrayForecast> = ({infoForecast}) => {
  return (
    <Wrapper>
      {
        infoForecast.map(({id, icon, infoTime }) => (
          <ItemForecast key={id}>
            <Time>{infoTime.time}</Time>
            <TitleDate>{infoTime.date}</TitleDate>
            <WeatherIcon icon={icon} description={'icon weather'}/>
          </ItemForecast>
        ))
      }
    </Wrapper>
  )
}

export default Forecast