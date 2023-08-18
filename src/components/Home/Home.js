import { useParams, useLoaderData } from "react-router-dom";

import Container from "../Container/Container";
import WeatherInformation from "../WeatherInformation/WeatherInformation";
import styles from "./Home.module.css";

export default function Home() {
  const loaderData = useLoaderData();
  const { cityName } = useParams();

  return (
    <Container>
      <div className={styles.weather__information}>
        {cityName ? (
          loaderData.temp !== undefined ? (
            <WeatherInformation weather={loaderData} cityName={cityName} />
          ) : (
            <h1 className={styles.window__message__text}>
              Неверное название города
            </h1>
          )
        ) : (
          <h1 className={styles.window__message__text}>Вы не указали город</h1>
        )}
      </div>
    </Container>
  );
}
