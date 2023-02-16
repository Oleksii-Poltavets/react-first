import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
const Header = (props) => {
    
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            {
                props.isAuth ?
                <div className={styles.headerButtons}>
                    <div className={styles.loginButton + ' ' + styles.login}
                    onClick={props.logoutTC}>
                        Logout
                    </div>
                </div>
                : <NavLink to="/login" className={styles.loginButton + ' ' + styles.login}>Login</NavLink>
            }
        </header>
    )
}

export default Header;