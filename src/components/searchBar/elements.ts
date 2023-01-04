import styled from 'styled-components'

export const Wrapper = styled.form`
  display: ${props => props.hidemobile ? "none" : "block"};
`

export const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  border-radius: 4px;
  font-size: 1.1rem;
`

export const Icon = styled.div``