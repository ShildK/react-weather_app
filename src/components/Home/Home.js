import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../Container/Container"
import { IoIosThunderstorm } from "react-icons/io"
import { BsCloudDrizzleFill } from "react-icons/bs"
import { BsCloudRainHeavyFill } from "react-icons/bs"
import { GiSnowing } from "react-icons/gi"
import { BsFillCloudFog2Fill } from "react-icons/bs"
import { PiCloudSunLight } from "react-icons/pi"
import WeatherInformation from "../WeatherInformation/WeatherInformation";
import styles from "./Home.module.css"

export default function Home() {
    const { cityName } = useParams()
    const [weather, setWeather] = useState({ temp: undefined, feels_like: undefined, wind: undefined })

    const url = process.env.REACT_APP_API_URL
    const apiKey = process.env.REACT_APP_API_KEY

    const getCoordinates = async (cityName) => {
        const req = await fetch(`${url}/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`);
        const response = await req.json()
        const data = response[0]
        if (req !== undefined) {
            return {
                lat: data?.lat,
                lon: data?.lon
            }
        }
        return undefined
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
        if (coordinates !== undefined) {
            const weather = await fetchWeather(coordinates.lat, coordinates.lon)
            console.log(weather)
            if (weather.main) {
                setWeather({ id: weather.weather[0].id, temp: weather.main.temp, feels_like: weather.main.feels_like, wind: weather.wind.speed })
                return weather
            }
        }
        setWeather([])
    }

    const icons = {
        '2': <IoIosThunderstorm />,
        '3': <BsCloudDrizzleFill />,
        '5': <BsCloudRainHeavyFill />,
        '6': <GiSnowing />,
        '7': <BsFillCloudFog2Fill />,
        '8': <PiCloudSunLight />
    }

    useEffect(() => {
        if (cityName) {
            getWeahter(cityName)
        }
    }, [])

    return (
        <Container>
            <div className={styles.weather__information}>
                {cityName ?
                    (weather !== [] && weather.temp !== undefined ?
                        <WeatherInformation
                            key={weather.id}
                            icon={icons[weather.id.toString()[0]]}
                            cityName={cityName}
                            temp={weather.temp}
                            feelsLike={weather.feels_like}
                            wind={weather.wind} />
                        : <div><h1 className={styles.window__message__text}>Неверное название города</h1></div>)
                    : <div><h1 className={styles.window__message__text}>Вы не указали город</h1></div>}
            </div>
        </Container>
    )
}