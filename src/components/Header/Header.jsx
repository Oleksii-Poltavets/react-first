import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
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