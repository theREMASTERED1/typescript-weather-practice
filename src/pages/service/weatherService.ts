import axios, { AxiosResponse } from "axios"
export class WeatherService {
    static async fetchWeather(
        location: string
    ): Promise<AxiosResponse<any, any>> {
        return await axios.get(`api/weather?location=${location}`)
    }
}
