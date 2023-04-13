export interface Weather {
    location: string
    temp: number
    description: string
    detailedDescription: string | null
    icon: string
}

export interface WeatherResponse {
    name: string
    main: {
        temp: number
    }
    weather: Array<{
        main: string
        description: string
        icon: string
    }>
}
