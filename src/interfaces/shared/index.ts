export interface DataWeather {
  id: string,
  name: string,
  icon: string,
  details: {
    measurement: string,
    weather: string,
    description: string,
    temperature: number,
    humidity: number,
    wind: {
      speed: number,
      deg: number,
    },
  },
  infoTime: {
    date: string,
    time: string,
  },
}

export type EndPoints = 'weather' | 'forcast'

export interface SearchParams {
  q: string,
  units: string,
  cnt: number,
}

export interface Props {
  [key: string]: boolean | any
}

export interface UnknownProps {
  [key: string]: any
}