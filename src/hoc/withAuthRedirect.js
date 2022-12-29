import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth
    }
}
const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth) return <Navigate to='/login' />
            return <Component/>
        }
    }

    let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return connectedRedirectComponent;
}

export default withAuthRedirect;