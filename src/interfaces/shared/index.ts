import { ReactElement, RefObject } from 'react'

export interface DataWeather {
  id: number | string,
  name: string,
  icon: string,
  details: {
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

export type UnknownInfo = {
  id: number,
  name: string,
  dt_txt: string,
  wind: {
    speed: number,
    deg: number,
    gust?: number
  },
  weather: [{
    main: string,
    description: string,
    icon: string
  }],
  main: {
    temp: number,
    humidity: number
  },
  dt: number,
  timezone: number,
}

export type EndPoints = 'weather' | 'forecast'

export type OnSubmit = (event: React.FormEvent<HTMLFormElement>) => void

export type ComProps = {
  [key: string]: boolean | string | number | OnSubmit | ReactElement[] | ReactElement | RefObject<HTMLInputElement>
}