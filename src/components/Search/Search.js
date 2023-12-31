import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Search.module.css"
import { getWeahter } from "../../lib/home";

export default function Search() {
    
    const [cityName, setCityName] = useState('')
    const navigate = useNavigate()

    const hedlerChange = (e) => {
        setCityName(e.target.value)
    }

    const onClick = async() => {
        navigate(`/${cityName}`)
        const weather = await getWeahter(`/${cityName}`)

        let citiesNamesInLocalStorage = JSON.parse(localStorage.getItem('listOfCities')) || []
        if(citiesNamesInLocalStorage.includes(cityName)){
            return
        }
        if(weather.main===undefined){
            return
        }
        
        citiesNamesInLocalStorage.push(cityName)
        localStorage.setItem('listOfCities', JSON.stringify(citiesNamesInLocalStorage))
    }

    return (
        <Container>
            <div className={styles.search}>
                <input onChange={hedlerChange} value={cityName} type="text" className={styles.search__input} />
                <button onClick={onClick} className={styles.search__button}>Find</button>
            </div>
        </Container>
    )
}