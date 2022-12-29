import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileTC, getStatusTC, updateStatusTC} from '../../redux/profilePageReducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileAPIContainer extends React.Component {
    
    componentDidMount() {
        let profileId = this.props.router.params['*'];
        if(profileId) {
            this.props.getUserProfileTC(profileId);
            this.props.getStatusTC(profileId);
        } else {
            this.props.getUserProfileTC(26401);
            this.props.getStatusTC(26401)
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
        status: state.profilePage.status
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
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter
)(ProfileAPIContainer);