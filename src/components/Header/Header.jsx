import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
        </header>
    )
}

export default Header;