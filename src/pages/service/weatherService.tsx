import axios from "axios";
export class WeatherService {
  private static instance: WeatherService;
  public static getInstance(): WeatherService {
    if (!WeatherService.instance) {
      WeatherService.instance = new WeatherService();
    }
    return WeatherService.instance;
  }

  public async fetchWeather() {
    try {
      return axios.get("http://localhost:3001/api/weather");
    } catch (error) {
      error;
    }
  }
}

// const searchPressed = () => {
//     fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
//       .then((res) => res.json())
//       .then((result) => {
//         setWeather(result);
//         SetIcon(result.weather[0].icon);
//         console.log(result);
//       });
//   };
