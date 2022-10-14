import React from 'react';
import Post from './Post/Post'
import styles from './MyPosts.module.css';
const MyPosts = (props) => {

    const textArea = React.createRef();
    
    const onAddPost = () => {
        let text = props.profilePage.newPostText;
        props.addPost(text);
        textArea.current.value = '';
    };

    const onUpdateNewPostText = () => {
        let text = textArea.current.value;
        props.updateNewPostText(text);
    };

    const postElements = props.profilePage.postsData
    .map(postData => <Post message={postData.message} likesCounter={postData.likes}/>);

    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            <textarea cols={12} rows={4} 
            className={styles.textarea} 
            placeholder='Type your text...'
            ref={textArea}
            onChange={onUpdateNewPostText}
            defaultValue={props.profilePage.newPostText}></textarea>
            <button className={styles.button_add}
            onClick={onAddPost}>Add post</button>
            {postElements}
        </div>
    )
}

export default MyPosts;