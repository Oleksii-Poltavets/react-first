import React from "react";
import styles from '../Users.module.css';
import { NavLink } from "react-router-dom";
import avatarImage from '../../../assets/images/avatar.jpg';

const User = ({user, ...props}) => {
    const onFollow = () => {
        props.followTC(user.id);
    };

    const onUnFollow = () => {
        props.unFollowTC(user.id);
    };

    return (
        <div className={styles.user}>
            <div className={styles.intro}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small != null ? user.photos.small : avatarImage} alt="avatar" className={styles.avatar} />
                </NavLink>
                {user.followed ? 
                        <button disabled={props.followingInProgress.some(userId => userId === user.id)} className={styles.button + ' ' + styles.gray}
                        onClick={onUnFollow}>Unfollow</button>
                        : 
                        <button disabled={props.followingInProgress.some(userId => userId === user.id)} className={styles.button + ' ' + styles.blue}
                        onClick={onFollow}>Follow</button>
                }
            </div>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <h4 className={styles.name}>{user.name}</h4>
                    <p className={styles.status}>{user.status}</p>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.country}>{'user.country'}</div>
                    <div className={styles.city}>{'user.city'}</div>
                </div>
            </div>
        </div>
    )
};

export default User;