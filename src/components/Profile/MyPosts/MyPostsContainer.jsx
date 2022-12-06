import MyPosts from './MyPosts';
import { updateNewPostText, addPost } from '../../../redux/profilePageReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts);

export default MyPostsContainer;