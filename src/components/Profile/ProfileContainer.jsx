import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileTC, getStatusTC, updateStatusTC} from '../../redux/profilePageReducer';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';

class ProfileAPIContainer extends React.Component {
    
    componentDidMount(props) {
        
        let profileId = this.props.router.params['*'];
        if(!profileId) {
            profileId = this.props.autorizedUserId;
        }
        this.props.getUserProfileTC(profileId);
        this.props.getStatusTC(profileId);
    }

    render () {
        if(!this.props.router.params['*'] && !this.props.autorizedUserId) {
            return <Navigate to="/login"/>
        }
        return (
            <Profile {...this.props}/>
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

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose (
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter
)(ProfileAPIContainer);