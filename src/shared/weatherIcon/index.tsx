import { Icon } from './elements'

const WeatherIcon = ({ icon, description, main }: string) => {
  return <Icon src={icon} main={main}/>
}

export default WeatherIcon