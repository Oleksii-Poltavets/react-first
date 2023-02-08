import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import Loader from '../common/Loader/Loader';

const Profile = (props) => {
    if (!props.userProfileData) {
        return <Loader/>
    }
    
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo profileData={props.userProfileData} 
            status={props.status}
            getStatus={props.getStatusTC}
            updateStatus={props.updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;