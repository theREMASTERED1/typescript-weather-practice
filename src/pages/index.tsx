"use client";
import { useState, useEffect } from "react";
import {
  Weather,
  MyWeatherError,
  databaseWeather,
} from "../pages/interfaces/weather";
import { WeatherService } from "../pages/service/weatherService";
import { toast } from "react-toastify";
import { GetServerSideProps, NextApiRequest } from "next";
import axios from "axios";
import { API, Amplify, Auth, withSSRContext } from "aws-amplify";
import { createWeather, deleteWeather } from "../graphql/mutations";
import { listWeathers, getWeather } from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import awsmobile from "../aws-exports";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { ListWeathersQuery } from "@/API";
import { useRouter } from "next/router";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({ ...awsmobile, ssr: true });

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [weatherResult, setWeatherResult] = useState<Weather>();
  const [savedWeatherList, setSavedWeatherList] = useState<databaseWeather[]>(
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number>();
  const [versionId, setVersionId] = useState<number>();
  const [sideSearch, setSideSearch] = useState<string>("");
  const [currentUser, setCurrentUser] = useState(null);

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
      const currentUser = await Auth.currentAuthenticatedUser();
      const response = await API.graphql({
        query: createWeather,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        variables: {
          input: {
            location: weatherResult?.location, // Add a location field
            username: currentUser.username, // Add a name field
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
      const SSR = withSSRContext();
      const currentUser = await Auth.currentAuthenticatedUser();
      const allWeathers = await SSR.API.graphql({
        query: listWeathers,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
        variables: {
          filter: {
            username: {
              eq: currentUser.username, // replace with the owner field name in your data model
            },
          },
        },
      });
      console.log(allWeathers?.data?.listWeathers?.items);
      setSavedWeatherList(allWeathers?.data?.listWeathers?.items || []);
    } catch (error) {
      console.log(error);
      toast.error("Weather not retrieved");
    }
  };
  const removeWeather = async () => {
    try {
      const deletedWeather = await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: deleteWeather,
        variables: {
          input: {
            id: deleteId,
            _version: 1,
          },
        },
      });
      savedWeather();
      toast.success("Location has been deleted");
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
  useEffect(() => {
    if (currentUser) {
      const checkAuth = async () => {
        try {
          savedWeather();
        } catch (error) {
          console.log(error);
        }
      };
      checkAuth();
    }
  }, [Auth.currentAuthenticatedUser()]);

  let iconUrl = `http://openweathermap.org/img/w/${weatherResult?.icon}.png`;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-500">
      <Authenticator>
        <div className=" absolute top-0 left-4" onClick={toggleSidebar}>
          <div className=" w-12 h-11 flex items-center justify-between m-10 flex-col">
            <div className="w-full h-2 bg-gray-700 rounded-md"></div>
            <div className="w-full h-2 bg-gray-700 rounded-md"></div>
            <div className="w-full h-2 bg-gray-700 rounded-md"></div>
          </div>
        </div>
        {/* sidebar */}

        <div
          className="absolute top-0 bottom-0 left-0 right-0 flex justify-end items-center"
          style={{ display: isOpen ? "flex" : "none" }}
          onClick={toggleSidebar}
        >
          <div className="absolute top-0 right-0 bottom-0 bg-white w-60 pt-10 pr-6 pb-6 pl-6 shadow-md z-50">
            <div className="text-lg font-semibold text-gray-800 mb-6">
              Saved Locations
            </div>
            {savedWeatherList
              .filter((weather) => !weather._deleted)
              .map((weather) => (
                <div
                  className="flex flex-col justify-start items-start"
                  key={weather.id}
                >
                  <button
                    className="py-2 border-b border-gray-300 w-full text-left"
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
                    className="text-sm text-red-600 cursor-pointer text-right"
                    onClick={() => {
                      setDeleteId(weather.id);
                      setVersionId(weather.version);
                    }}
                  >
                    remove
                  </button>
                </div>
              ))}
            <button
              className="absolute bottom-6 p-1 rounded-lg right-5 bg-cyan-400"
              type="button"
              onClick={() => Auth.signOut()}
            >
              Sign out
            </button>
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
      </Authenticator>
    </div>
  );
};
export default Home;
