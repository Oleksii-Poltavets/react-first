import React from 'react';
import styles from './ProfileInfo.module.css';
import avatar from '../../../assets/images/avatar.jpg';
import ProfileStatus from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    
    return (
        <div>
            <img className={styles.banner} src={`https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-blue-house-civilization-city-banner-background-material-image_269026.jpg`} alt='img' />
            <div className={styles.profileDescr}>
                <img className={props.profileData.lookingForAJob ? styles.avatar + ' ' + styles.avatarLFJ : styles.avatar} src={props.profileData.photos.large ? props.profileData.photos.large : avatar} alt="Avatar" />
                <div className={styles.profileInfo}>
                    <ul className={styles.list}>
                        <li className={styles.listItem + ' ' + styles.listItemName}>
                            {props.profileData.fullName}
                        </li>
                        <li className={styles.listItem}>
                            <span>Job status:</span> 
                            <span>{props.profileData.lookingForAJob ? 'Looking for a job!' : 'Employed'}</span>
                        </li>
                        <li className={styles.listItem}>
                            <span>Job status description:</span>
                            <span>{props.profileData.lookingForAJobDescription}</span>
                        </li>
                        <li className={styles.listItem}>
                            <span>About me:</span>
                            <ProfileStatus 
                            status={props.status}
                            getStatus={props.getStatus}
                            updateStatus={props.updateStatus}
                            aboutMe={props.profileData.aboutMe}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;