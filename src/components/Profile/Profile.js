import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
    let citiesNamesInLocalStorage = JSON.parse(localStorage.getItem("listOfCities"));
    if(citiesNamesInLocalStorage === undefined){
        citiesNamesInLocalStorage = []
    }

    const [ citiesHistory, setCitiesHistory ] = useState(citiesNamesInLocalStorage);

    const deleteOfHistory = () => {
        localStorage.removeItem("listOfCities");
        setCitiesHistory([])
    };

    return (
        <div className={styles.profile__page}>
            {citiesHistory.length > 0 ? (
                <div className={styles.profile__page__list}>
                    <h2 className={styles.profile__page__title}>
                        Список городов, которые Вы искали ранее
                    </h2>
                    {citiesNamesInLocalStorage.map((city) => {
                        return (
                            <Link
                                to={`/${city}`}
                                className={styles.profile__page__link}
                            >
                                {city.toUpperCase()}
                            </Link>
                        );
                    })}
                    <button
                        onClick={deleteOfHistory}
                        className={styles.delete__history}
                    >
                        Очистить историю
                    </button>
                </div>
            ) : (
                <h2 className={styles.profile__page__title}>
                    Перейдите во вкладку поиск
                </h2>
            )}
        </div>
    );
}

export default Profile;
