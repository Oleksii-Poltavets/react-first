import React from 'react';
import Post from './Post/Post'
import styles from './MyPosts.module.css';
import { Field, Form } from 'react-final-form';
import { composeValidators, minLength, required } from '../../../helpers/validate';
const MyPosts = (props) => {
    
    const onSubmit = (values) => {
        let text = values.newPostText;
        props.addPost(text);
    };

    const postElements = props.profilePage.postsData
    .map(postData => <Post key={postData.id} message={postData.message} likesCounter={postData.likes} avatar={props.profilePage.userProfile.photos.small}/>);

    const NewPostArea = (props) => {
        return (
            <form className={styles.textarea} onSubmit={props.handleSubmit}>
                <Field name="newPostText" validate={composeValidators(required, minLength)}>
                    {({input, meta}) => (
                        <div>
                            <textarea {...input} placeholder="Type your text..."></textarea>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <button className={styles.button_add} type="submit">Add post</button>
            </form>
        )
    }

    const NewPostForm = () => {
        return (
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <NewPostArea handleSubmit={handleSubmit}/>
                )}
            >
            </Form>
        )
    };

    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            <NewPostForm/>
            {postElements}
        </div>
    )
}

export default MyPosts;