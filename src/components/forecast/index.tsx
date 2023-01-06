import { Wrapper, ItemForecast, TitleDate, Time } from './elements'
import WeatherIcon from '../../shared/weatherIcon'

type ArrayForecast = {
  infoForecast: Array<{}>
}

const Forecast = ({infoForecast}: ArrayForecast) => {

  return (
    <Wrapper>
      {
        infoForecast.map(({id, details, icon, infoTime }) => (
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