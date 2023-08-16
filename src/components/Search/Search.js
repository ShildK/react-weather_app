import { useState } from "react";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Search.module.css"

export default function Search() {
    const [cityName, setCityName] = useState('')
    const navigate = useNavigate()

    const hedlerChange = (e) => {
        setCityName(e.target.value)
    }



    const onClick = () => {
        navigate(`/${cityName}`)
        
        let cityNamesInLocalStorage = JSON.parse(localStorage.getItem('cityNames')) || []
        cityNamesInLocalStorage.push(cityName)
        localStorage.setItem('cityNames', JSON.stringify(cityNamesInLocalStorage))
    }

    return (
        <Container>
            <div className={styles.search}>
                <input onChange={hedlerChange} type="text" className={styles.search__input} />
                <button onClick={onClick} className={styles.search__button}>Find</button>
            </div>
        </Container>
    )
}