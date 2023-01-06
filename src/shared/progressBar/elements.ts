import styled from 'styled-components'
import colors from '../../styles/colors'

export const BarContainer = styled.div`
  width: 100%;
  height: 16px;
  background-color: ${colors.grey};
  border-radius: 8px;
  overflow: hidden;
`

export const BarLevel = styled.div`
  height: 100%;
  width: 0%;
  border-radius: 0 8px 8px 0;
  background-color: ${colors.blue};

  animation-name: fillingBar;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(.74,.12,.49,1.45);

  @keyframes fillingBar {
    from {
      width: 0%;
    }
    to {
      width: ${({ level }) => `${level}%`};
    }
  }

  width: ${({ level }) => level}%
`