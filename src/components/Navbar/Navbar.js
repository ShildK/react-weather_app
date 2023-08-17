import styles from "./Navbar.module.css"

import { useState } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'
import { BiSolidSearchAlt2 } from 'react-icons/bi'

function Navbar() {
    const [isMenuOpen, getMenuState] = useState(false)

    const hedlerChange = () => {
        getMenuState(!isMenuOpen)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px', padding: '30px', backgroundColor: 'rgb(238, 239, 239)' }}>
            <div className={styles.burger__menu}>
                <button onClick={hedlerChange} className={styles.burger__menu__button}>{isMenuOpen ? <VscChromeClose /> : <GiHamburgerMenu />}</button>
                <div className={isMenuOpen ? `${styles.menu__open}` : `${styles.menu__close}`}>
                    <Link to="/" className={styles.menu__link}>Home</Link>
                    <Link to="/profile" className={styles.menu__link}>Profile</Link>
                </div>
            </div>
            <Link to="/search"><BiSolidSearchAlt2 /></Link>
        </div>
    )
}
export default Navbar;