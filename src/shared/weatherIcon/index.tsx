import { FC } from 'react'
import { Icon } from './elements'

type Props = {
  icon: string,
  description: string,
}

const WeatherIcon:FC<Props> = ({ icon, description }) => {
  return <Icon src={icon} alt={description || 'This is an icon'}/>
}

export default WeatherIcon