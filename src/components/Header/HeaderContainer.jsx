import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutTC } from '../../redux/userAuthReducer';

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth
    }
};

export default connect(mapStateToProps, {logoutTC})(HeaderContainer);