import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/Profile.info';
import styles from './Profile.module.css';

const Profile = (props) => {

    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo/>
            <MyPosts 
            dispatch={props.dispatch}
            postsData={props.state.postsData}
            newPostText={props.state.newPostText}
            addPostAC={props.addPostAC}
            updateNewPostTextAC={props.updateNewPostTextAC}
            />
        </div>
    )
}

export default Profile;