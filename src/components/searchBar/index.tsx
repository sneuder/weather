// hidemobile prop as styled prop to hide element in moble viewports
import { FC } from 'react'
import { ComProps } from '../../interfaces/shared'
import { Wrapper, SearchInput, Icon } from './elements'
import useWeather from '../../hooks/useWeather'

const SearchBar:FC<ComProps> = ({hidemobile}) => {
  const {getWeatherByName, refSearch, removeError, errorSearch} = useWeather()
  const errorMessage = errorSearch ? 'City not found' : 'Search new place'
  
  return (
    <Wrapper onSubmit={getWeatherByName} hidemobile={hidemobile}>
      <SearchInput onFocus={removeError} type="text" ref={refSearch} placeholder={errorMessage} error={`${errorSearch}`}/>
      <Icon error={`${errorSearch}`}/>
    </Wrapper>
  )
}

export default SearchBar