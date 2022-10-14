import CloseFriends from './CloseFriends';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        closeFriends: state.sideBar.closeFriends,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {};
}

const CloseFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(CloseFriends);

export default CloseFriendsContainer;