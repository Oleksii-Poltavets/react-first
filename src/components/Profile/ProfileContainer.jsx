import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileTC} from '../../redux/profilePageReducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileAPIContainer extends React.Component {
    
    componentDidMount() {
        let profileId = this.props.router.params['*'];
        if(profileId) {
            this.props.getUserProfileTC(profileId);
        } else {
            this.props.getUserProfileTC(2);
        }
    }

    render () {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfileData: state.profilePage.userProfile,
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

const ProfileContainer = connect(mapStateToProps, {getUserProfileTC})(withRouter(ProfileAPIContainer));

export default ProfileContainer;