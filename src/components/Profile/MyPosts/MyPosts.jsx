import React from 'react';
import Post from './Post/Post'
import styles from './MyPosts.module.css';
const MyPosts = (props) => {

    const postElements = props.postsData
    .map(postData => <Post message={postData.message} likesCounter={postData.likes}/>);

    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            <textarea cols={12} rows={4} className={styles.textarea} placeholder='Type your text...'></textarea>
            <button className={styles.button_add}>Add post</button>
            {postElements}
        </div>
    )
}

export default MyPosts;