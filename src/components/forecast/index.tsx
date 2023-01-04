import { Wrapper, Title, WrapperForecast, ItemForecast, DayTitle, Text, WrapperDetails } from './elements'
import WeatherIcon from '../../shared/weatherIcon'

const Forecast = ({infoForecast}) => {
  return (
    <Wrapper>
      <Title>weather Forecast</Title>
      <WrapperForecast>

        {
          infoForecast.map(({humidity, icon}) => (
            <ItemForecast>
              <DayTitle>Esneider</DayTitle>
              <WrapperDetails>
                <Text>{humidity}%</Text>
              </WrapperDetails>
              <WeatherIcon icon={icon}/>
              
            </ItemForecast>
          ))
        }

      </WrapperForecast>
    </Wrapper>
  )
}

export default Forecast