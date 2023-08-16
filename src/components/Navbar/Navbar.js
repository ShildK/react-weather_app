import styles from "./Navbar.module.css"

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

function Navbar({ isMenuOpen, getMenuState }) {
    const hedlerChange = () => {
        getMenuState(!isMenuOpen)
    }
    
    return (
        <div className={styles.burger__menu}>
            <button onClick={hedlerChange} className={styles.burger__menu__button}>{isMenuOpen ? <VscChromeClose /> : <GiHamburgerMenu />}</button>
            <div className={isMenuOpen ? `${styles.menu__open}` : `${styles.menu__close}`}>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    )
}
export default Navbar;