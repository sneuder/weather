export type Forecasts = {
  id: string,
  date: {
    date: string,
    time: string,
  },
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
  [key: string]: boolean | any
}

export interface UnknownProps {
  [key: string]: any
}