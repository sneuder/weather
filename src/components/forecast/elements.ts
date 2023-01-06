import styled from 'styled-components'
import colors from '../../styles/colors'
import viewPorts from '../../styles/viewPorts'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;

  overflow: hidden;
  overflow-y: scroll;

  border-radius: 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  height: ${() => `${514}px`};

  @media (max-width: ${viewPorts.table}px) {
    height: auto;
    overflow: visible;
  }

`

export const ItemForecast = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 5px;

  padding: 8px;
  border-radius: 8px;
  color: ${colors.white};
  background-color: ${colors.darkBlue};
  transition: background-color 0.2s, transform 0.2s;
  cursor: pointer;
  
  &:hover {
    background-color: ${colors.darkGreyBlue};
    transform: scale(0.9);
  }

  &:active {
    background-color: ${colors.blue};
    transform: scale(1);
  }
`

export const TitleDate = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`

export const Time = styled.p`
  font-size: 0.8rem;
`