import styled from 'styled-components'
import colors from '../../styles/colors'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 300;
`

export const WrapperForecast = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0px;
`

export const ItemForecast = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`

export const DayTitle = styled.h3`
  font-size: 1rem;
  font-weight: normal;
`

export const Text = styled.p`
  font-size: 0.9rem;
  color: ${colors.darkGreyBlue}
  font-weight: 100;

`

export const WrapperDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`