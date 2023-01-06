import {FC} from 'react'
import { BarContainer, BarLevel } from './elements'
import { StyleProps } from './elements'

const ProgressBar:FC<StyleProps> = ({level}) => {
  return (
    <BarContainer>
      <BarLevel level={`${level}`}/>
    </BarContainer>
  )
}

export default ProgressBar