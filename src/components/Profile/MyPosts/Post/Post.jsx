import React from 'react';
import styles from './Post.module.css';
const Post = (props) => {
    return (
        <div className={styles.post}>
            <div>
                <img className={styles.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU' alt='img'/>
                ava+descr
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