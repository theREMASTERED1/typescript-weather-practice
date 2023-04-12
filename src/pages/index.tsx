"use client";
import { useState, useEffect } from "react";
import { Weather } from "./interfaces/weather";
import { WeatherService } from "./service/weatherService";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [weatherResult, setWeatherResult] = useState<Weather>();
  const [icon, SetIcon] = useState<string[]>([]);
  const weatherService = WeatherService.getInstance();

  const getWeather = async () => {
    const key = process.env.API_KEY;
    const url = "https://api.openweathermap.org/data/2.5/";

    try {
      let location = search;
      const response = await axios.get(
        `http://localhost:3001/api/weather?location=${location}`
      );
      console.log(response?.data);
      setWeatherResult(response?.data);
      const newWeather: Weather = {
        location: response?.data.name,
        temp: response?.data.main.temp,
        description: response?.data.weather[0].main,
        detailedDescription: response?.data.weather[0].description,
        icon: response?.data.weather[0].icon,
      };
      setWeatherResult(newWeather);
    } catch (error) {
      console.log(error);
    }
  };

  let iconUrl = `http://openweathermap.org/img/w/${weatherResult?.icon}.png`;
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" w-60 h-fit p-4 bg-slate-400 rounded-3xl items-center flex flex-col text-center justify-center">
        <div className="my-1">Enter any location for current weather</div>
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
          className="my-4 text-black rounded-lg px-1"
        />
        <button
          onClick={getWeather}
          className="px-3 py-3 rounded-3xl bg-slate-600"
        >
          search weather
        </button>
        <div id="WeatherResults" className="w-full items-center flex flex-col ">
          <p>{weatherResult?.location}</p>

          <p>{weatherResult?.detailedDescription}</p>

          <img src={iconUrl} alt="weather image" className="w-36" />

          <p>{weatherResult?.description}</p>

          <p>{weatherResult?.temp}°C</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
