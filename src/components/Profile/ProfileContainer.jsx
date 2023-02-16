import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileTC, getStatusTC, updateStatusTC, changeImageTC} from '../../redux/profilePageReducer';
import { Navigate } from "react-router-dom";
import { compose } from 'redux';
import withRouter from '../../helpers/withRouter';

class ProfileAPIContainer extends React.Component {

    refreshProfile() {
        let profileId = this.props.router.params['*'];
        if(!profileId) {
            profileId = this.props.autorizedUserId;
            if(!profileId) {
                return;
            }
        }
        this.props.getUserProfileTC(profileId);
        this.props.getStatusTC(profileId);
    }
    
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        
        if(this.props.router.params['*'] !== prevProps.router.params['*']) {
            this.refreshProfile();
        }
    }

    render () {
        if(!this.props.router.params['*'] && !this.props.autorizedUserId) {
            return <Navigate to="/login"/>
        }
        return (
            <Profile isOwner={!this.props.router.params['*']}{...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfileData: state.profilePage.userProfile,
        status: state.profilePage.status,
        autorizedUserId: state.userAuth.id,
        isAuth: state.userAuth.isAuthd
    }
};

export default compose (
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC, changeImageTC}),
    withRouter
)(ProfileAPIContainer);