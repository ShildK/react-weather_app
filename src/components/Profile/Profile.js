import { useState } from "react";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";

function Profile() {
    let citiesNamesInLocalStorage = JSON.parse(localStorage.getItem("listOfCities"));

    const deleteOfHistory = () => {
        localStorage.removeItem("listOfCities");
    };

    return (
        <div className={styles.profile__page}>
            {citiesNamesInLocalStorage !== null ? (
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
                                {city}
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
