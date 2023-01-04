import styled from 'styled-components'
import colors from '../../styles/colors'

export const WrapperStatus = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 10px;
  
  border-radius: 4px;
  width: 100%;
  padding: 12px;
  background-color: ${colors.darkGreyBlue};
`

export const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
`

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;

  display: flex;
  gap: 5px;
`

export const TextUnit = styled.span`
  font-size: 1rem;
  font-weight: normal;
`