import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import CloseFriends from './CloseFriends/CloseFriends';

const NavBar = (props) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.nav__link}>
                    <NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.nav__link }>Profile</NavLink>
                </li>
                <li className={styles.nav__link}>
                    <NavLink to="/dialogs" className={navData => navData.isActive ? styles.active : styles.nav__link }>Dialogs</NavLink>
                </li>
                <li className={styles.nav__link}>
                    <NavLink to="/news" className={navData => navData.isActive ? styles.active : styles.nav__link }>News</NavLink>
                </li>
                <li className={styles.nav__link}>
                    <NavLink to="/music" className={navData => navData.isActive ? styles.active : styles.nav__link}>Music</NavLink>
                </li>
            </ul>
            <CloseFriends state={props.state} store={props.store}/>
        </nav>
    )
}

export default NavBar;