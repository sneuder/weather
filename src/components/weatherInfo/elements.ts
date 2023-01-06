import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { BasicLayoutGrid } from '../../styles/styles'

type StyleProps = {
  deg?: number,
  level?: number
}

export const Wrapper = styled.div`
  ${BasicLayoutGrid}
  color: ${colors.white};
  gap: 20px;
`
export const WrapperGeneral = styled.div`
  ${BasicLayoutGrid}
  gap: 5px;
`

export const Weather = styled.p`
  font-weight: 500;
  font-size: 2rem;
`

export const Text = styled.p`
  color: ${colors.blueLight};

  &::first-letter {
    text-transform: uppercase;
  }
`

export const Temperature = styled.h1`
  display: grid;
  grid-template-columns: 1fr auto;
  font-weight: 400;
  font-size: 6rem;
  line-height: 5rem;
`

export const BadgeTemp = styled.span`
  font-size: 2rem;
`

export const ArrowIcon = styled(BsFillArrowRightCircleFill)`
  font-size: 2.1rem;
  color: ${colors.blue};
  
  animation-name: arrowAnimation;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  animation-timing-function: cubic-bezier(1,-0.99,.61,1.95);

  @keyframes fillingBar {
    from {
      width: 0%;
    }
    to {
      width: ${({ level }: StyleProps) => `${level}%`};
    }
  }

  @keyframes arrowAnimation {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(120deg);
    }
    to {
      transform: rotate(${({ deg }: StyleProps) => deg}deg);
    }
  }
`

export const WrapperStatus = styled.div`
  ${BasicLayoutGrid}
  grid-template-rows: 130px;
  gap: 30px;
  width: 100%;
`