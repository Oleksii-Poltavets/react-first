import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.nav__link}>
                    <NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.nav__link }>Profile</NavLink>
                </li>
                <li className={styles.nav__link}>
                    <NavLink to="/dialogs" className={navData => navData.isActive ? styles.active : styles.nav__link }>Messages</NavLink>
                </li>
                <li className={styles.nav__link}>
                    <NavLink to="/news" className={navData => navData.isActive ? styles.active : styles.nav__link }>News</NavLink>
                </li>
                <li className={styles.nav__link}>
                    <NavLink to="/music" className={navData => navData.isActive ? styles.active : styles.nav__link}>Music</NavLink>
                </li>
            </ul>
            <div className={styles.nav__link} >Settings</div>
        </nav>
    )
}

export default NavBar;