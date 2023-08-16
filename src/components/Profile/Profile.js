import styles from './Profile.module.css'
import { Link } from "react-router-dom";

function Profile() {
    let cityNamesInLocalStorage = JSON.parse(localStorage.getItem('cityNames'))
    return (
        <div className={styles.profile__page}>
            {cityNamesInLocalStorage.map(city => {
                return (
                    <Link to={`/${city}`}>{city}</Link>
                )
            })}

        </div>
    )
}

export default Profile