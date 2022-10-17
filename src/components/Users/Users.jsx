import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";

const Users = (props) => {
    
    let usersList = props.usersPage.users
    .map(user => <User 
                    key={user.id} 
                    id={user.id} 
                    name={user.userName} 
                    title={user.title}
                    country={user.location.country} 
                    city={user.location.city} 
                    avatar={user.avatarImg}
                    followed={user.followed}
                    follow={props.follow}
                    unfollow={props.unfollow}/>
        );

    return (
        <div className={styles.users}>
            {usersList}
        </div>
    )
};

export default Users;