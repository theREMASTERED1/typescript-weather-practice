const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

app.get("/api/weather", async (req, res) => {
  const location = req.query;
  const OPENWEATHER_API_KEY = process.env.API_KEY;
  const OPENWEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${OPENWEATHER_API_KEY}`;
  try {
    const response = await axios.get(OPENWEATHER_API_URL);
    const weatherData = response.data.main;
    res.send({
      location: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].main,
      detailedDescription: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching weather data" });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
