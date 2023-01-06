import styled from 'styled-components'
import colors from '../../styles/colors'
import viewPorts from '../../styles/viewPorts'
import { ComProps } from '../../interfaces/shared'

const paddingSide = '30px'

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.blue};
  min-height: 100vh;
  height: auto;

  @media (max-width: ${viewPorts.table}px) {
    padding:50px;
  }

  @media (max-width: ${viewPorts.mobile}px) {
    padding:0;
  }
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  
  @media (min-width: ${viewPorts.sDesktop}px) {
    width: 900px;
  }

  @media (max-width: ${viewPorts.table}px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }

  @media (max-width: ${viewPorts.mobile}px) {
    align-self: flex-start;
  }
`

export const ForecastSide = styled.section<ComProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-content: start;
  gap: 20px;
  padding: ${paddingSide};
  background-color: ${colors.cakeBlue};
  border-radius: 8px 0 0 8px;

  ${({ hidedesktop }) => hidedesktop && 'display: none;'}
  
  @media (max-width: ${viewPorts.table}px) {
    border-radius: 0 0 8px 8px;
    display: block;
    padding: 20px;
    ${({ hidedesktop }) => hidedesktop && 'border-radius: 8px 8px 0 0;'}
  }

  @media (max-width: ${viewPorts.mobile}px) {
    border-radius: 0;
  }
`

export const WeatherSide = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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