// export interface OpenWeatherResult {
//   main: OpenWeatherResultTemp;
//   weather: OpenWeatherResultWeather[];
//   name: string;
// }

// export interface OpenWeatherResultTemp {
//   temp: number;
// }

// export interface OpenWeatherResultWeather {
//   main: string;
//   description: string;
// }

export interface Weather {
  location: string;
  temp: number;
  description: string;
  detailedDescription: string | null;
  icon: string;
}
