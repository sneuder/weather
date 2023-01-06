import { FC, ReactElement } from 'react'
import { WrapperStatus, Title, Text, TextUnit } from './elements'

type Props = {
  title: string,
  measure: number,
  unit: string,
  children: ReactElement
}

const WeatherStatu:FC<Props> = ({title, measure, unit, children}) => {
  return (
    <WrapperStatus>
      <Title>{title}</Title>
      <Text>{measure}
        <TextUnit>{unit}</TextUnit>
      </Text>
      {children}
    </WrapperStatus>
  )
}

export default WeatherStatu