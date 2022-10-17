import { followAC, unfollowAC, setUsersAC} from '../../redux/usersPageReducer';
import { connect } from 'react-redux';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        usersPage: state.users,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
