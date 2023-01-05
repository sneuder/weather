import styled from 'styled-components'
import colors from '../../styles/colors'

type StyleProps = {
  deg: number
}

export const Wrapper = styled.div`
  color: ${colors.white};
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 20px;
`
export const WrapperGeneral = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
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
`

export const BadgeTemp = styled.span`
  font-size: 2rem;
  padding-top: 20px;
`

export const ProgressBar = styled.progress`
  width: 100%;
  appareance: none;
  -webkit-appearance: none;
  
  &::-webkit-progress-bar {
    border-radius: 4px;
  }

  &::-webkit-progress-value {
    border-radius: 4px;

    background-color: ${colors.blue};

}
`

export const ArrowIcon = styled.img<StyleProps>`
  width: 40px;
  color: ${colors.white};
  
  animation-name: arrowAnimation;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  
  @keyframes arrowAnimation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(${({ deg }) => deg}deg);
    }
  }
`