import styled from 'styled-components'
import colors from '../../styles/colors'
import viewPorts from '../../styles/viewPorts'

const paddingSide = '30px'

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.blue};
  min-height: 100vh;
`

export const CardWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 0.8fr;

  @media (max-width: ${viewPorts.sDesktop}px) {
    width: 80%;
  }

  @media (max-width: ${viewPorts.table}px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${viewPorts.mobile}px) {
    width: 100%;
    align-self: flex-start;
  }
`

export const ForecastSide = styled.section`
  padding: ${paddingSide};
  background-color: ${colors.cakeBlue};
  border-radius: 8px 0 0 8px;

  ${({ hidedesktop }) => hidedesktop && 'display: none;'}
  
  @media (max-width: ${viewPorts.table}px) {
    border-radius: 8px 8px 0 0;
    display: block;
    padding: 20px;
    ${({ hidedesktop }) => hidedesktop && 'border-radius: 0 0 8px 8px;'}
  }

  @media (max-width: ${viewPorts.mobile}px) {
    border-radius: 0;
  }
`

export const WeatherSide = styled.main`
  padding: ${paddingSide};
  background-color: ${colors.darkBlue};
  border-radius: 0 8px 8px 0;

  @media (max-width: ${viewPorts.table}px) {
    border-radius: 0;
  }
`
export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`