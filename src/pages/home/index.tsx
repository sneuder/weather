import useStarting from '../../hooks/useStarting'
import { Background, CardWrapper, ForecastSide, WeatherSide, WrapperButton } from './elements'

import SearchBar from '../../components/searchBar'
import UnitButton from '../../components/unitButton'
import WeatherIcon from '../../shared/weatherIcon'
import WeatherInfo from '../../components/weatherInfo'
import Forecast from '../../components/forecast'

import Loader from '../../components/loader'

const Home = () => {
  const {infoCity, loadingGeneral, measures} = useStarting()

  const {icon, forecast} = infoCity
  const {description} = infoCity.details

  if (loadingGeneral) {
    return (
      <Background>
        <Loader />
      </Background>
    )
  }

  return (
    <Background>
      <CardWrapper>
        <ForecastSide>
          <SearchBar hidemobile={true}/>
          <Forecast infoForecast={infoCity.forecast}/>
        </ForecastSide>
        <WeatherSide>
          <WrapperButton>
            <WeatherIcon icon={icon} description={description} />
            <UnitButton measure={measures.temperature}/>
          </WrapperButton>
          <WeatherInfo infoCity={infoCity} measures={measures}/>
        </WeatherSide>
        <ForecastSide hidedesktop>
          <SearchBar />
        </ForecastSide>
      </CardWrapper>
    </Background>
  )
}

export default Home