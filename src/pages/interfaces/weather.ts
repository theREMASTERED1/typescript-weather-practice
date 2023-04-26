export interface Weather {
  location: string;
  temp: number;
  description: string;
  detailedDescription: string | null;
  icon: string;
  username:string;
}
export interface OpenWeatherError {
  cod: number
  message: string
}

export interface MyWeatherError {
  code: number
  message: string
}
export interface databaseWeather{
  id:number
 location: string
 version:number
 _deleted:boolean
}
