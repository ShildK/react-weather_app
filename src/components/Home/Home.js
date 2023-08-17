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
import { getWeahter } from "../../lib/home";

const icons = {
    '2': <IoIosThunderstorm />,
    '3': <BsCloudDrizzleFill />,
    '5': <BsCloudRainHeavyFill />,
    '6': <GiSnowing />,
    '7': <BsFillCloudFog2Fill />,
    '8': <PiCloudSunLight />
}

export default function Home() {
    const { cityName } = useParams()
    const [weather, setWeather] = useState({ temp: undefined, feels_like: undefined, wind: undefined })
    
    useEffect(() => {
        const fetchData = async () => {
            if (cityName) {
                const currentWeather = await getWeahter(cityName)
                setWeather({ id: currentWeather.weather[0].id, temp: currentWeather.main.temp, feels_like: currentWeather.main.feels_like, wind: currentWeather.wind.speed })
                return
            }
            setWeather({})
            return 
        }
        fetchData()
    }, [])

    return (
        <Container>
            <div className={styles.weather__information}>
                {cityName ?
                    (weather.temp !== undefined ?
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