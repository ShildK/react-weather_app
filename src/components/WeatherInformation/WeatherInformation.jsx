import styles from "./WeatherInformation.module.css"

function WeatherInformation({ icon, cityName, temp, feelsLike, wind }) {
    return (
        <>
            <div className={styles.weather__information__icon}>{icon}</div>
            <div className={styles.weather__information__text}>
                <h1>{cityName}</h1>
                <h2>Temperature: {temp} °C</h2>
                <h2>Feels like: {feelsLike} °C</h2>
                <h2>Wind: {wind} m/s</h2>
            </div>
        </>
    )
}
export default WeatherInformation;