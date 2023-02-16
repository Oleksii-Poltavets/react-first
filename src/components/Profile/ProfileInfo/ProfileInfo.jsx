import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatusWithHooks';

import avatar from '../../../assets/images/avatar.jpg';
import addImageIcon from '../../../assets/images/add-photo.png';

const ProfileInfo = ({profileData, status, getStatus, updateStatus, isOwner, changeImageTC}) => {

    const changeAvatarImage = (e) => {
        if (e.target.files.length) {
            const selectedFile = e.target.files[0];
            const formData = new FormData();
            formData.append("selectedFile", selectedFile);
            changeImageTC(formData);
        }
    }
    
    return (
        <div>
            <img className={styles.banner} src={`https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-blue-house-civilization-city-banner-background-material-image_269026.jpg`} alt='img' />
            <div className={styles.profileDescr}>
                {isOwner ?
                    <div className={styles.avatarContainer}>
                    <label htmlFor="imageFileUpload">
                        <img className={styles.avatarOwners + ' ' + styles.avatar} src={profileData.photos.large ? profileData.photos.large : avatar} alt="Avatar" />
                        <img className={styles.addImageIcon} src={addImageIcon} alt="add" />
                    </label>
                    <input type="file" id='imageFileUpload'
                    className={styles.fileUploadInput}
                    onChange={changeAvatarImage}
                    />
                </div> :
                <div className={styles.avatarContainer}>
                    <img className={profileData.lookingForAJob ? styles.avatar + ' ' + styles.avatarLFJ : styles.avatar} src={profileData.photos.large ? profileData.photos.large : avatar} alt="Avatar" />
                </div>
                }
                <div className={styles.profileInfo}>
                    <ul className={styles.list}>
                        <li className={styles.listItem + ' ' + styles.listItemName}>
                            {profileData.fullName}
                        </li>
                        <li className={styles.listItem}>
                            <span>Job status:</span> 
                            <span>{profileData.lookingForAJob ? 'Looking for a job!' : 'Employed'}</span>
                        </li>
                        <li className={styles.listItem}>
                            <span>Job status description:</span>
                            <span>{profileData.lookingForAJobDescription}</span>
                        </li>
                        <li className={styles.listItem}>
                            <span>About me:</span>
                            <ProfileStatus
                            status={status}
                            getStatus={getStatus}
                            updateStatus={updateStatus}
                            aboutMe={profileData.aboutMe}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;