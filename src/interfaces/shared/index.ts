export type Forecast = {
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