import React from "react";
import Users from './Users';
import { setCurrentPage, getUsersTC, setUsersPageTC, followTC, unFollowTC} from '../../redux/usersPageReducer';
import { connect } from 'react-redux';
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetch, getPageSize, getTotalUsersCount, getUsers } from "../../helpers/usersSelectors";

class UsersContainer extends React.Component {
    
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersTC(currentPage, pageSize);
    }

    setCurrentUsersPage = (page) => {
        const {pageSize} = this.props;
        this.props.setUsersPageTC(page, pageSize);
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
                followTC={this.props.followTC}
                unFollowTC={this.props.unFollowTC}
                />
            
    };
};

let mapStateToProps = (state) => {
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
    connect(mapStateToProps, {setCurrentPage, getUsersTC, setUsersPageTC, followTC, unFollowTC})
)(UsersContainer);
