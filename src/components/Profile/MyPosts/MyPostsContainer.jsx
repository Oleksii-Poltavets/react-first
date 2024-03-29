import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profilePageReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;

