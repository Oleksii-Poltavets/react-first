import React from 'react';
import styles from './CloseFriends.module.css';

const CloseFriends = (props) => {
    
    const closeFriendsItems = props.state.closeFriends.map(friend => 
                <div>
                    <img className={styles.avatar} src={friend.avatar} alt="img" />
                    <p className={styles.name}>{friend.name}</p>
                </div>
                );

    return (
        <div className={styles.closeFriends}>
            <h2 className={styles.title}>Close friends</h2>
            <div className={styles.closeFriends__inner}>
                {closeFriendsItems}
            </div>
        </div>
    )
}

export default CloseFriends;