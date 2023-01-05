import useWeather from '../../hooks/useWeather'

import { Background, CardWrapper, ForecastSide, WeatherSide, WrapperButton } from './elements'

import SearchBar from '../../components/searchBar'
import UnitButton from '../../components/unitButton'
import WeatherIcon from '../../shared/weatherIcon'
import WeatherInfo from '../../components/weatherInfo'
import Forecast from '../../components/forecast'

import Loader from '../../components/loader'

const Home = () => {
  const { infoCity } = useWeather()
  return (
    <Background>
      {
        infoCity.id !== '' ? <Loader /> :
          <CardWrapper>
            <ForecastSide>
              <SearchBar hidemobile={true}/>
              <Forecast infoForecast={infoCity.forecast}/>
            </ForecastSide>
            <WeatherSide>
              <WrapperButton>
                <WeatherIcon icon={infoCity.icon} description={infoCity.description} main={true}/>
                <UnitButton />
              </WrapperButton>
              <WeatherInfo infoCity={infoCity} />
            </WeatherSide>
            <ForecastSide hidedesktop>
              <SearchBar />
            </ForecastSide>
          </CardWrapper>
      }
    </Background>
  )
}

export default Home