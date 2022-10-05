import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <img className={styles.avatar} src={props.avatar} alt="img" />
            <NavLink className={styles.dialog} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;