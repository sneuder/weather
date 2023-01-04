import styled from 'styled-components'
import colors from '../../styles/colors'

const paddingSide = "30px";

export const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  padding-top: 60px;
  background-color: ${colors.blue};
  min-height: 100vh;
`

export const CardWrapper = styled.div`
  width: 60%;
  height: 40%;
  display: grid;
  grid-template-columns: 1fr 0.8fr;

`

export const ForecastSide = styled.section`
  padding: ${paddingSide};
  background-color: ${colors.cakeBlue};
  border-radius: 8px 0 0 8px;
`

export const WeatherSide = styled.main`
  padding: ${paddingSide};
  background-color: ${colors.darkBlue};
  border-radius: 0 8px 8px 0;
`
export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`