import { Wrapper, Title, WrapperForecast, ItemForecast, DayTitle, Text, WrapperDetails, ImageDetail } from './elements'
import WeatherIcon from '../../shared/weatherIcon'

const Forecast = ({infoForecast}) => {
  return (
    <Wrapper>
      <Title>Weather Forecast</Title>
      <WrapperForecast>
        {
          infoForecast.map(({humidity, icon, date, id}) => (
            <ItemForecast key={id}>
              <DayTitle>{date.date}</DayTitle>
              <Text>{date.time}</Text>
              <WrapperDetails>
                <ImageDetail src={'https://www.svgrepo.com/show/279711/humidity.svg'} />
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