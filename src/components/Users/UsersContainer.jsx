import React from "react";
import Users from './Users';
import { setCurrentPage, toggleFollowingInProgress, getUsersTC, setUsersPageTC, followTC, unFollowTC} from '../../redux/usersPageReducer';
import { connect } from 'react-redux';
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetch, getPageSize, getTotalUsersCount, getUsers } from "../../helpers/usersSelectors";

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    setCurrentUsersPage = (page) => {
        this.props.setUsersPageTC(page, this.props.pageSize);
    }

    render() {
        // console.log('render');
        return  <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFetch={this.props.isFetch}
                setCurrentPage={this.setCurrentUsersPage}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followTC={this.props.followTC}
                unFollowTC={this.props.unFollowTC}
                />
            
    };
};

let mapStateToProps = (state) => {
    // console.log('mapStateToProps');
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetch: getIsFetch(state),
        followingInProgress: getFollowingInProgress(state),
    }
};
export default compose(
    connect(mapStateToProps, {setCurrentPage, toggleFollowingInProgress, getUsersTC, setUsersPageTC, followTC, unFollowTC})
)(UsersContainer);
