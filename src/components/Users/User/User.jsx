import React from "react";
import styles from '../Users.module.css';

const User = (props) => {
    
    const onFollow = () => {
        let id = props.id;
        props.follow(id);
    };

    const onUnFollow = () => {
        let id = props.id;
        props.unfollow(id);
    };

    return (
        <div className={styles.user}>
            <div className={styles.intro}>
                <img src={props.avatar} alt="avatar" className={styles.avatar} />
                {props.followed ? 
                        <button className={styles.button}
                        onClick={onUnFollow}>Unfollow</button>
                        : 
                        <button className={styles.button}
                        onClick={onFollow}>Follow</button>
                }
            </div>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <h4 className={styles.name}>{props.name}</h4>
                    <p className={styles.title}>{props.title}</p>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.country}>{props.country}</div>
                    <div className={styles.city}>{props.city}</div>
                </div>
            </div>
        </div>
    )
};

export default User;