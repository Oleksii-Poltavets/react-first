import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
            <div className={styles.loginButton}>
                {
                    props.isAuth ? props.login : <NavLink to="/login" className={styles.login}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;