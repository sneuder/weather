import useWeather from '../../hooks/useWeather'
import useSearch from '../../hooks/useSearch'

import { Wrapper, SearchInput, Icon } from './elements'

const SearchBar = ({hidemobile}: any) => {
  const { refSearch, setSearchName } = useSearch()

  return (
    <Wrapper onSubmit={setSearchName} hidemobile={hidemobile}>
      <SearchInput type="text" ref={refSearch} placeholder={'Search new place'}/>
    </Wrapper>
  )
}

export default SearchBar