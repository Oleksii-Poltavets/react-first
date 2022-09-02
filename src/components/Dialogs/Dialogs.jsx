import React from 'react';
import styles from './Dialogs.module.css';


const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {props.dialogsElements}
            </div>
            <div className={styles.messages}>
                {props.messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;