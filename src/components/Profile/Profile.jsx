import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/Profile.info';
import styles from './Profile.module.css';

const Profile = (props) => {

    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;