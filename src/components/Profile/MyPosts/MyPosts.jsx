import React from 'react';
import Post from './Post/Post'
import styles from './MyPosts.module.css';
const MyPosts = (props) => {

    const textArea = React.createRef();
    
    const addPost = () => {
        let text = props.newPostText;
        props.dispatch(props.addPostAC(text));
        textArea.current.value = '';
    };

    const updateNewPostText = () => {
        let text = textArea.current.value;
        props.dispatch(props.updateNewPostTextAC(text));
    };

    const postElements = props.postsData
    .map(postData => <Post message={postData.message} likesCounter={postData.likes}/>);

    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            <textarea cols={12} rows={4} 
            className={styles.textarea} 
            placeholder='Type your text...'
            ref={textArea}
            onChange={updateNewPostText}
            defaultValue={props.newPostText}></textarea>
            <button className={styles.button_add}
            onClick={addPost}>Add post</button>
            {postElements}
        </div>
    )
}

export default MyPosts;