import React from 'react';
import styles from './Post.module.css';
import avatar from '../../../../assets/images/avatar.jpg'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div>
                <img className={styles.avatar} src={`${props.avatar ? props.avatar : avatar}`} alt='img'/>
                <div>
                    <span>
                        {props.likesCounter} likes
                    </span>
                </div>
            </div>
            <p>
                {props.message}
            </p>
        </div>
    )
}

export default Post;