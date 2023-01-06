import { Icon } from './elements'

type Props = {
  icon: string,
  description?: string,
  main?: boolean,
}

const WeatherIcon = ({ icon, description, main }: Props) => {
  return <Icon src={icon} main={main} alt={description || 'This is an icon'} loading={'eager'}/>
}

export default WeatherIcon