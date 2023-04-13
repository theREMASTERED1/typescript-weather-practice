"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Weather, WeatherResponse } from "./interfaces/weather"
import { WeatherService } from "./service/weatherService"

const Home = () => {
    const [search, setSearch] = useState<string>("")
    const [weatherResult, setWeatherResult] = useState<Weather>({
        location: "",
        temp: 0,
        description: "",
        detailedDescription: "",
        icon: "sun",
    })

    const getWeather = async () => {
        try {
            const response = await WeatherService.fetchWeather(search)
            console.log(response.data)
            setWeatherResult(response.data as Weather)
        } catch (error) {
            console.log(error)
        }
    }

    let iconUrl = `http://openweathermap.org/img/w/${weatherResult?.icon}.png`

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className=" w-60 h-fit p-4 bg-slate-400 rounded-3xl items-center flex flex-col text-center justify-center mt-28">
                <div className="my-1">
                    Enter any location for current weather
                </div>
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
                <div
                    id="WeatherResults"
                    className="w-full items-center flex flex-col "
                >
                    <p>{weatherResult?.location}</p>

                    <p>{weatherResult?.detailedDescription}</p>

                    <Image src={iconUrl} alt="weather image" className="w-36" width="100" height="100"/>

                    <p>{weatherResult?.description}</p>

                    <p>{weatherResult?.temp}°C</p>
                </div>
            </div>
        </div>
    )
}
export default Home
