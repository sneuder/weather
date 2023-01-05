export type Forecasts = {
  id: string,
  date: {
    [key: string]: string
  } | string,
  weather: string,
  temperature: number,
  humidity: number,
  wind: Wind,
  icon: string,
}

export type Wind = {
  speed: number,
  deg: number,
}

export interface Props {
  [key: string]: boolean
}

export interface UnknownProps {
  [key: string]: any
}