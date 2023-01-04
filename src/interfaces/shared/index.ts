export type Forecast = {
  date: string,
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