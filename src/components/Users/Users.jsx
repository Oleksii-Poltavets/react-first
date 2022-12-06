import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import avatarImage from '../../assets/images/avatar.jpg';
import Loader from '../common/Loader/Loader';

const Users = (props) => {
    
    let totalPageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= totalPageCount; i++) {
        pages.push(i);
    }

    let pagination = pages.map((page) => {
        return <div 
                key={page}
                className={props.currentPage === page ? styles.paginationItem + ' ' + styles.paginationItemActive : styles.paginationItem}
                onClick={() => {props.setCurrentPage(page)}}>{page}</div>
    });

    return (
        <>
            {props.isFetch ? <Loader/> : null}
            <div className={styles.users}>
                <h1 className={styles.title}>Friend or enemy?</h1>
                <div className={styles.pagination}>
                    <div className={styles.paginationContainer}>
                        {pagination}
                    </div>
                </div>
                {props.users
                    .map(user => <User 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        title={user.status}
                        country={'user.location.country'} 
                        city={'user.location.city'} 
                        avatar={user.photos.small != null ? user.photos.small : avatarImage}
                        followed={user.followed}
                        followingInProgress={props.followingInProgress}
                        toggleFollowingInProgress={props.toggleFollowingInProgress}
                        followTC={props.followTC}
                        unFollowTC={props.unFollowTC}/>
                    )
                }
                <div className={styles.pagination}>
                    <div className={styles.paginationContainer}>
                        {pagination}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Users;