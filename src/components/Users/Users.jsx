import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import Loader from '../common/Loader/Loader';
import Pagination from "../common/Pagination/Pagination";

const Users = ({totalUsersCount, pageSize, currentPage, setCurrentPage, users, ...props}) => {

    return (
        <>
            {props.isFetch ? <Loader/> : null}
            <div className={styles.users}>
                <h1 className={styles.title}>Friend or enemy?</h1>
                <Pagination 
                totalUsersCount={totalUsersCount} 
                pageSize={pageSize} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                portionSize={10}
                />
                {users.map(user => <User 
                        key={user.id}
                        user={user}
                        followingInProgress={props.followingInProgress}
                        followTC={props.followTC}
                        unFollowTC={props.unFollowTC}/>
                    )
                }
                {/* <Pagination 
                totalUsersCount={totalUsersCount} 
                pageSize={pageSize} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                portionSize={10}
                /> */}
            </div>
        </>
    )
};

export default Users;