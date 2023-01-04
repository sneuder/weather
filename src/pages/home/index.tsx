import useWeather from '../../hooks/useWeather'

import { Background, CardWrapper, ForecastSide, WeatherSide, WrapperButton } from './elements'

import SearchBar from '../../components/searchBar'
import UnitButton from '../../components/unitButton'
import WeatherIcon from '../../components/weatherIcon'
import WeatherInfo from '../../components/weatherInfo'

import Loader from '../../components/loader'

const Home = () => {
  const { infoCity } = useWeather()
  return (
    <Background>
      {
        !infoCity.name ? <Loader /> : <CardWrapper>
          <ForecastSide>
            <SearchBar />
          </ForecastSide>
          <WeatherSide>
            <WrapperButton>
              <WeatherIcon icon={infoCity.icon} description={infoCity.description}/>
              <UnitButton />
            </WrapperButton>
            <WeatherInfo infoCity={infoCity} />
          </WeatherSide>
          <ForecastSide hidedesktop>
            <SearchBar hidemobile={true}/>
          </ForecastSide>
        </CardWrapper>

      }
      
    </Background>
  )
  
}

export default Home