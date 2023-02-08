import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    const {id, avatar, name} = props;
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <img className={styles.avatar} src={avatar} alt="img" />
            <NavLink className={styles.dialog} to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;