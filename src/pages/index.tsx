"use client";
import { useState, useEffect } from "react";
import { Weather, MyWeatherError, databaseWeather } from "./interfaces/weather";
import { WeatherService } from "./service/weatherService";
import { toast } from "react-toastify";
import axios from "axios";
import { API, Amplify } from "aws-amplify";
import { createWeather, deleteWeather } from "../graphql/mutations";
import { listWeathers, getWeather } from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import awsmobile from "../aws-exports";
Amplify.configure(awsmobile);

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [weatherResult, setWeatherResult] = useState<Weather>();
  const [savedWeatherList, setSavedWeatherList] = useState<databaseWeather[]>(
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number>();
  const [sideSearch, setSideSearch] = useState<string>("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  //gets coordinates of a device to automatically display a users location and weather.It does ask permissions
  const GeoWeather = async () => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await WeatherService.fetchGeoWeather(
            latitude,
            longitude
          );
          setWeatherResult(response.data as Weather);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //gets weather on search of a location
  const getWeather = async () => {
    try {
      const response = await WeatherService.fetchWeather(search);
      console.log(response?.data);
      setWeatherResult(response.data as Weather);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const myError = error.response?.data as MyWeatherError;
        toast.error(myError.message);
      }
      console.log(error);
    }
  };
  const getSideWeather = async () => {
    try {
      const response = await WeatherService.fetchWeather(sideSearch);
      console.log(response?.data);
      setWeatherResult(response.data as Weather);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const myError = error.response?.data as MyWeatherError;
        console.log(myError);
        toast.error(myError.message);
      }
    }
  };

  const saveWeather = async () => {
    try {
      const response = await API.graphql({
        query: createWeather,
        authMode: "API_KEY",
        variables: {
          input: {
            location: weatherResult?.location, // Add a location field
            name: "", // Add a name field
            description: "", // Add a description field
            isComplete: false, // Add an isComplete field
          },
        },
      });
      console.log(response);
      savedWeather();
      toast.success("Location has been saved");
    } catch (error) {
      console.log(error);
      toast.error("location did not save");
    }
  };

  const savedWeather = async () => {
    try {
      const allWeathers: GraphQLResult<any> = await API.graphql({
        query: listWeathers,
      });
      setSavedWeatherList(allWeathers?.data?.listWeathers?.items || []);
    } catch (error) {
      console.log(error);
    }
  };
  const removeWeather = async () => {
    try {
      const deletedWeather = await API.graphql({
        authMode: "API_KEY",
        query: deleteWeather,
        variables: {
          input: {
            id: deleteId,
          },
        },
      });
      savedWeather();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GeoWeather();
    savedWeather();
  }, []);
  useEffect(() => {
    if (sideSearch) {
      getSideWeather();
    }
  }, [sideSearch]);
  useEffect(() => {
    if (deleteId) {
      removeWeather();
    }
  }, [deleteId]);

  let iconUrl = `http://openweathermap.org/img/w/${weatherResult?.icon}.png`;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-500">
      <div className=" absolute top-20 left-20" onClick={toggleSidebar}>
        <div className=" w-12 h-11 flex items-center justify-between m-10 flex-col">
          <div className="w-full h-2 bg-gray-700 rounded-md"></div>
          <div className="w-full h-2 bg-gray-700 rounded-md"></div>
          <div className="w-full h-2 bg-gray-700 rounded-md"></div>
        </div>
      </div>
      {/* sidebar */}
      <div
        className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 flex justify-end items-center"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div className="absolute top-0 right-0 bottom-0 bg-white w-60 pt-10 pr-6 pb-6 pl-6 shadow-md">
          <div className="text-lg font-semibold text-gray-800 mb-6">
            Saved Locations
          </div>
          {savedWeatherList.map((weather) => (
            <div className="flex flex-col">
              <button
                key={weather.id}
                className="py-2 border-b border-gray-300"
                onClick={() => {
                  setSideSearch(weather.location);
                  setIsOpen(false);
                  toggleSidebar();
                }}
              >
                <div className="text-base text-gray-700">
                  {weather.location}
                </div>
              </button>
              <button
                className="text-sm text-red-600 cursor-pointer"
                onClick={() => {
                  setDeleteId(weather.id);
                }}
              >
                remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 w-96 bg-white rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-gray-700 text-2xl font-semibold mb-4">
          Enter a location for current weather
        </h1>
        <div className="flex flex-col w-full items-center">
          <label htmlFor="location" className="sr-only">
            Location
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="location"
              placeholder="Enter a location"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={getWeather}
              className="absolute right-0 top-0 px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Search
            </button>
          </div>
        </div>

        {weatherResult && (
          <div className="mt-6 flex flex-col items-center space-y-4">
            <h2 className="text-gray-700 text-xl font-semibold">
              {weatherResult?.location}
            </h2>
            <p className="text-gray-700">
              {weatherResult?.detailedDescription}
            </p>
            <img src={iconUrl} alt="weather image" className="w-36" />
            <p className="text-gray-700 text-lg">
              {weatherResult?.description}
            </p>
            <p className="text-gray-700 text-lg">{weatherResult?.temp}°C</p>
            <button
              className="bg-blue-500 py-2 px-4 rounded-md text-white font-semibold mt-4"
              onClick={saveWeather}
            >
              Save Location
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
