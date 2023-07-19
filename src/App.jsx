import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState('')
  const [weather, setWeather] = useState({ temp: undefined, feels_like: undefined, wind: undefined})

  const cityNameChangeHedler = (e) => {
    setCityName(e.target.value)
  }

  const handlerClick = async () => {
    let weatherNew = await getWeahter(cityName)
    console.log(weatherNew);
    setWeather({temp: weatherNew.main.temp, feels_like: weatherNew.main.feels_like, wind: weatherNew.wind.speed })
  }

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
    return weather
  }

  return (
    <>
      <input onChange={cityNameChangeHedler} type="text" />
      <button onClick={handlerClick}>Find</button>
      <div>
        {weather.temp !== undefined ? <div> <h1>{cityName}</h1> <h2>{weather.feels_like}</h2> <h2>{weather.temp}</h2> <h2>{weather.wind}</h2> </div> : ''}
      </div>
    </>
  )
}

export default App;