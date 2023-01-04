import styled from 'styled-components'
import { Props } from '../../interfaces/shared'

export const Icon = styled.img<Props>`
  width: ${({ main }) => main ? '90px' : '40px'};
`