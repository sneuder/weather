import { WrapperStatus, Title, Text, TextUnit } from './elements'

const WeatherStatus = ({title, text, unit, children}) => {
  return (
    <WrapperStatus>
      <Title>{title}</Title>
      <Text>{text}
      <TextUnit>{unit}</TextUnit>
      </Text>
      {children}
    </WrapperStatus>
  )
}

export default WeatherStatus