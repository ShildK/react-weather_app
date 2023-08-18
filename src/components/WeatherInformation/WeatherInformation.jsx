import styles from "./WeatherInformation.module.css"

import { IoIosThunderstorm } from "react-icons/io"
import { BsCloudDrizzleFill, BsCloudRainHeavyFill, BsFillCloudFog2Fill } from "react-icons/bs"
import { GiSnowing } from "react-icons/gi"
import { PiCloudSunLight } from "react-icons/pi"

const icons = {
    '2': <IoIosThunderstorm />,
    '3': <BsCloudDrizzleFill />,
    '5': <BsCloudRainHeavyFill />,
    '6': <GiSnowing />,
    '7': <BsFillCloudFog2Fill />,
    '8': <PiCloudSunLight />
}

function WeatherInformation({ cityName, weather }) {
    return (
        <>
            <div className={styles.weather__information__icon}>{icons[weather.id.toString()[0]]}</div>
            <div className={styles.weather__information__text}>
                <h1>{cityName}</h1>
                <h2>Temperature: {weather.temp} °C</h2>
                <h2>Feels like: {weather.feelsLike} °C</h2>
                <h2>Wind: {weather.wind} m/s</h2>
            </div>
        </>
    )
}
export default WeatherInformation;