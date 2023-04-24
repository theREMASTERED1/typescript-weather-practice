import axios, { AxiosError } from "axios"
import { NextApiRequest, NextApiResponse } from "next";
import { Weather,OpenWeatherError } from "../interfaces/weather";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { location } = req.query;
  const API_KEY = process.env.API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  try {
    const response = await axios.get(API_URL);
    res.status(200).json({
      location: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].main,
      detailedDescription: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    } as Weather);
  } catch (e) {
    console.log(e)
    if (axios.isAxiosError(e)) {
        const error = e as AxiosError
        if (error.response) {
            const owError = error.response.data as OpenWeatherError
            res.status(error.response.status).json({
                code: owError.cod,
                message: owError.message,
            })
            return
        }
    }
    res.status(500).json({ message: "Error fetching weather data" })
}
}

