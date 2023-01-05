// hidemobile prop as styled prop to hide element in moble viewports
import { FC } from 'react'
import { ComProps } from '../../interfaces/shared'
import { Wrapper, SearchInput, Icon } from './elements'
import useWeather from '../../hooks/useWeather'

const SearchBar:FC<ComProps> = ({hidemobile}) => {
  const {getWeatherByName, refSearch} = useWeather()
  return (
    <Wrapper onSubmit={getWeatherByName} hidemobile={hidemobile}>
      <SearchInput type="text" ref={refSearch} placeholder={'Search new place'}/>
    </Wrapper>
  )
}

export default SearchBar