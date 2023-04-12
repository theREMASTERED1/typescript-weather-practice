const axios = require("axios");
import { NextApiRequest, NextApiResponse } from "next";

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
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching weather data hoe" });
  }
}
