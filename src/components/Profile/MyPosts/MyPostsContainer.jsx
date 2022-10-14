import MyPosts from './MyPosts';
import { updateNewPostTextAC, addPostAC } from '../../../redux/profilePageReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text));
        },
        addPost: (text) => {
            dispatch(addPostAC(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;