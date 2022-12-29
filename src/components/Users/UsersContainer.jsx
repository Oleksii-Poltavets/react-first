import React from "react";
import Users from './Users';
import { setCurrentPage, toggleFollowingInProgress, getUsersTC, setUsersPageTC, followTC, unFollowTC} from '../../redux/usersPageReducer';
import { connect } from 'react-redux';
import { compose } from "redux";
class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    setCurrentUsersPage = (page) => {
        this.props.setUsersPageTC(page, this.props.pageSize);
    }

    render() {
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
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetch: state.usersPage.isFetch,
        followingInProgress: state.usersPage.followingInProgress,
    }
};
export default compose(
    connect(mapStateToProps, {setCurrentPage, toggleFollowingInProgress, getUsersTC, setUsersPageTC, followTC, unFollowTC})
)(UsersContainer);
