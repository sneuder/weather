import styled from 'styled-components'
import colors from '../../styles/colors'
const size = '40px'

export const Button = styled.button`
  width: ${size};
  height: ${size};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 4px;
  color: ${colors.darkBlue};
  border: 1px solid transparent;
  transition: background 0.5s, border-color 0.5s, color 0.5s;
  
  &:hover {
    border-color: ${colors.white};
    color: ${colors.white};
    background: transparent;
  }

  &:active {
    border-color: transparent;
    color: ${colors.white};
    background: ${colors.blue};
  }
`

