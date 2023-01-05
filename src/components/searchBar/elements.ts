import styled from 'styled-components'
import viewPorts from '../../styles/viewPorts'
import { ComProps } from '../../interfaces/shared'

export const Wrapper = styled.form<ComProps>`
  @media (max-width: ${viewPorts.mobile}px) {
      display: ${props => props.hidemobile ? 'none' : 'block'};
    }
`

export const SearchInput = styled.input<ComProps>`
  width: 100%;
  height: 50px;
  padding-left: 20px;
  border-radius: 4px;
  font-size: 1.1rem;
`

export const Icon = styled.div``