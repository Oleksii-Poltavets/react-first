import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    return (
        <>
            {!editMode &&
            <span 
            className={styles.status}
            onDoubleClick={activateEditMode}
            >
                {props.status || 'Here can be user status...'}
            </span>
            }
            {editMode &&
                <input 
                onChange={onStatusChange}
                onBlur={deactivateEditMode}
                autoFocus type="text" 
                value={status}
                />
            }
        </>
    )
}

export default ProfileStatus;