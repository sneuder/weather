import useForecast from '../../hooks/useForecast'
import { FC } from 'react'
import { Forecasts } from '../../interfaces/WeatherSlice'
import { Wrapper, ItemForecast, TitleDate, Time } from './elements'
import WeatherIcon from '../../shared/weatherIcon'

type ArrayForecast = {
  infoForecast: Array<Forecasts>
}

const Forecast: FC<ArrayForecast> = ({infoForecast}) => {
  const { handleForcastChange } = useForecast()
  return (
    <Wrapper>
      {
        infoForecast.map((item) => {
          const {id, icon, infoTime} = item
          return (
            <ItemForecast key={id} onClick={() => handleForcastChange(item)}>
              <Time>{infoTime.time}</Time>
              <TitleDate>{infoTime.date}</TitleDate>
              <WeatherIcon icon={icon} description={'icon weather'}/>
            </ItemForecast>
          )
        })
      }
    </Wrapper>
  )
}

export default Forecast