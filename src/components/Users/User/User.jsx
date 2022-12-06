import React from "react";
import styles from '../Users.module.css';
import { NavLink } from "react-router-dom";

const User = (props) => {
    
    const onFollow = () => {
        let id = props.id;
        props.followTC(id);
    };

    const onUnFollow = () => {
        let id = props.id;
        props.unFollowTC(id);
    };

    return (
        <div className={styles.user}>
            <div className={styles.intro}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.avatar} alt="avatar" className={styles.avatar} />
                </NavLink>
                {props.followed ? 
                        <button disabled={props.followingInProgress.some(userId => userId === props.id)} className={styles.button + ' ' + styles.gray}
                        onClick={onUnFollow}>Unfollow</button>
                        : 
                        <button disabled={props.followingInProgress.some(userId => userId === props.id)} className={styles.button + ' ' + styles.blue}
                        onClick={onFollow}>Follow</button>
                }
            </div>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <h4 className={styles.name}>{props.name}</h4>
                    <p className={styles.status}>{props.title}</p>
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