import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container/Container";

export default function Search() {
    const [cityName, setCityName] = useState('')
    const navigate = useNavigate()

    const hedlerChange = (e) => {
        setCityName(e.target.value)
    }

    const onClick = () => {
        navigate(`/${cityName}`)
    }

    return (
        <Container>
            <div>
                <input onChange={hedlerChange} type="text" />
                <button onClick={onClick}>Find</button>
            </div>
        </Container>
    )
}