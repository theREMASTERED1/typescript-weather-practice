import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { Weather, WeatherResponse } from "../interfaces/weather"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { location } = req.query
    const API_KEY = process.env.API_KEY
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    try {
        const response = await axios.get(API_URL)
        const openWeatherResponse = response.data as WeatherResponse
        const returnWeather: Weather = {
            location: openWeatherResponse.name,
            temp: openWeatherResponse.main.temp,
            description: openWeatherResponse.weather[0].main,
            detailedDescription: openWeatherResponse.weather[0].description,
            icon: openWeatherResponse.weather[0].icon,
        }
        res.status(200).json(returnWeather)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error fetching weather data hoe" })
    }
}
