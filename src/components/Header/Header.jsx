import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../assets/Logo.svg';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>


            <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                <NavLink
                to="/"
                className={({isActive}) =>
                isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
                }
                onClick={closeMenu}
                >
                    Home
                </NavLink>

                <NavLink
                to="/catalog"
                className={({isActive}) => 
                isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
            }
            onClick={closeMenu}
                >
                    Catalog

                </NavLink>

            </nav>

            <button className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu">

                <span />
                <span />
                <span />

            </button>

        </header>
    
    )
}
