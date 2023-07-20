import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "./components/Container/Container"

export default function Home() {
    const { cityName } = useParams()
    const [weather, setWeather] = useState({ temp: undefined, feels_like: undefined, wind: undefined })

    const url = process.env.REACT_APP_API_URL
    const apiKey = process.env.REACT_APP_API_KEY

    const getCoordinates = async (cityName) => {
        const req = await fetch(`${url}/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`);
        const response = await req.json()
        const data = response[0]
        return {
            lat: data?.lat,
            lon: data?.lon
        }
    }

    const fetchWeather = async (lat, lon) => {
        if (lat !== undefined && lon !== undefined) {
            const req = await fetch(`${url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
            const response = await req.json();
            return response
        }
        return {}
    }

    const getWeahter = async (cityName) => {
        const coordinates = await getCoordinates(cityName)
        const weather = await fetchWeather(coordinates.lat, coordinates.lon)
        setWeather({ temp: weather.main.temp, feels_like: weather.main.feels_like, wind: weather.wind.speed })
        return weather
    }

    useEffect(() => {
        getWeahter(cityName)
    })

    return (
        <Container>
            
                {weather.temp !== undefined ? <div> <h1>{cityName}</h1> <h2>{weather.feels_like}</h2> <h2>{weather.temp}</h2> <h2>{weather.wind}</h2> </div> : ''}
            
        </Container>
    )
}