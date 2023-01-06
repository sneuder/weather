import { BiSearch } from 'react-icons/bi'
import styled from 'styled-components'
import viewPorts from '../../styles/viewPorts'
import { ComProps } from '../../interfaces/shared'
import colors from '../../styles/colors'

export const Wrapper = styled.form<ComProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  
  @media (max-width: ${viewPorts.table}px) {
    display: ${props => props.hidemobile ? 'none' : 'block'};
  }

  &:focus {
    border: 2px red solid;
  }
`

export const SearchInput = styled.input<ComProps>`
  width: 100%;
  height: 50px;
  padding-left: 40px;
  border-radius: 4px;
  font-size: 1.1rem;
  color: ${(({ error }) => error === 'true' ? colors.error : colors.darkBlue)};
  border: 2px solid ${(({ error }) => error == 'true' ? colors.error : 'transparent')};

  &::placeholder {
  color: ${(({ error }) => error === 'true' ? colors.error : colors.grey)};
}

  &:focus {
    & ~svg {
    color: ${colors.darkBlue};
  }
}
`

export const Icon = styled(BiSearch) <ComProps>`
  position: absolute;
  font-size: 25px;
  top: calc((50px / 2) - 12.5px);
  left: 10px;
  color: ${({ error }) => error === 'true' ? colors.error : colors.grey};
  transition: color 0.2s;
`