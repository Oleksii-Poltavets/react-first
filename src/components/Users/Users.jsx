import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import axios from 'axios';
import avatarImage from '../../assets/images/avatar.jpg'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setUsersCount(responce.data.totalCount);
        });
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
        });
    }

    render() {
        
        let totalPageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= totalPageCount; i++) {
            pages.push(i);
        }

        let pagination = pages.map((page) => {
                            return <div 
                                    key={page}
                                    className={this.props.currentPage === page ? styles.paginationItem + ' ' + styles.paginationItemActive : styles.paginationItem}
                                    onClick={() => {this.setCurrentPage(page)}}>{page}</div>
                        });

        return (
            <div className={styles.users}>
                <h1 className={styles.title}>Friend or enemy?</h1>
                <div className={styles.pagination}>
                    <div className={styles.paginationContainer}>
                        {pagination}
                    </div>
                </div>
                {this.props.users
                    .map(user => <User 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        title={user.status}
                        country={'user.location.country'} 
                        city={'user.location.city'} 
                        avatar={user.photos.small != null ? user.photos.small : avatarImage}
                        followed={user.followed}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}/>
                    )
                }
                <div className={styles.pagination}>
                    <div className={styles.paginationContainer}>
                        {pagination}
                    </div>
                </div>
            </div>
        )
    };
};

export default Users;