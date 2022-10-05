import React from 'react';
import styles from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={props.className}>
            <img className={styles.avatar} src={props.avatar} alt="img" />
            <p className={styles.text}>{props.messageText}</p>
        </div>
    )
}

export default Message;