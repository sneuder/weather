import { WrapperStatus, Title, Text, TextUnit } from './elements'

type Props = {
  title: string,
  measure: number,
  unit: string,
  children: JSX.Element,
}

const WeatherStatus = ({title, measure, unit, children}: Props) => {
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

export default WeatherStatus