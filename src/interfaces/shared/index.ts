import { ReactElement, RefObject } from 'react'

export interface DataWeather {
  id: string,
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

export type EndPoints = 'weather' | 'forecast'

export type ParamsUpdate = {
  key: string,
  value: string
}

export type OnSubmit = (event: React.FormEvent<HTMLFormElement>) => void


export interface ComProps {
  [key: string]: boolean | string | number | OnSubmit | ReactElement[] | ReactElement | RefObject<HTMLInputElement>
}

export interface UnknownProps {
  [key: string]: any
}