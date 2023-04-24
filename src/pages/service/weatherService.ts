import axios, { AxiosResponse } from "axios";


export class WeatherService {

  static async fetchGeoWeather(latitude: number, longitude: number): Promise<AxiosResponse<any, any>>  {
    return axios.get(`/api/geo?lat=${latitude}&lon=${longitude}`);
  }

  static async fetchWeather(
    location: string
  ): Promise<AxiosResponse<any, any>> {
    return axios.get(`/api/weather?location=${location}`);
  }
}
