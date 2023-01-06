import styled, { css } from 'styled-components'
import colors from '../../styles/colors'
const size = '40px'

const defaultStyleButton = css`
  cursor: auto;
  color: ${colors.darkBlue};
  border: 1px solid transparent;
  
`

export const Button = styled.button<any>`
  ${defaultStyleButton}
  width: ${size};
  height: ${size};
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background 0.5s, border-color 0.5s, color 0.5s;

  ${({ loading }) => loading == 'true' ? `
    &:hover {
      ${defaultStyleButton}
    }

    &:active {
      ${defaultStyleButton}
    }
    `:
    `
    &:hover {
      cursor: pointer;
      border-color: ${colors.white};
      color: ${colors.white};
      background: transparent;
    }

    &:active {
      border-color: transparent;
      color: ${colors.white};
      background: ${colors.blue};
    }
  `}
`

