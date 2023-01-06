import { BarContainer, BarLevel } from './elements'

const ProgressBar = ({level}) => {
  return (
    <BarContainer>
      <BarLevel level={`${level}`}/>
    </BarContainer>
  )
}

export default ProgressBar