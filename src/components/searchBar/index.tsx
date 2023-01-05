// hidemobile prop as styled prop to hide element in moble viewports
import useWeather from '../../hooks/useWeather'
import { Wrapper, SearchInput, Icon } from './elements'
import { ComProps } from '../../interfaces/shared'

const SearchBar = ({hidemobile}: ComProps) => {
  const {getWeatherByName, refSearch} = useWeather()
  return (
    <Wrapper onSubmit={getWeatherByName} hidemobile={hidemobile}>
      <SearchInput type="text" ref={refSearch} placeholder={'Search new place'}/>
    </Wrapper>
  )
}

export default SearchBar