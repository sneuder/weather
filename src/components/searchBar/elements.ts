import { BiSearch } from 'react-icons/bi'
import styled from 'styled-components'
import viewPorts from '../../styles/viewPorts'
import colors from '../../styles/colors'

type StyleProps = {
  error?: string,
  hidemobile?: boolean,
}

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  
  @media (max-width: ${viewPorts.table}px) {
    display: ${(props: StyleProps) => props.hidemobile ? 'none' : 'block'};
  }

  &:focus {
    border: 2px red solid;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 40px;
  border-radius: 4px;
  font-size: 1.1rem;
  color: ${(({ error }: StyleProps) => error === 'true' ? colors.error : colors.darkBlue)};
  border: 2px solid ${(({ error }) => error === 'true' ? colors.error : 'transparent')};

  &::placeholder {
  color: ${(({ error }) => error === 'true' ? colors.error : colors.grey)};
}

  &:focus {
    & ~svg {
    color: ${colors.darkBlue};
  }
}
`

export const Icon = styled(BiSearch)`
  position: absolute;
  font-size: 25px;
  top: calc((50px / 2) - 12.5px);
  left: 10px;
  color: ${({ error }: StyleProps) => error === 'true' ? colors.error : colors.grey};
  transition: color 0.2s;
`