import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { autorizeTC } from '../../redux/userAuthReducer';

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.autorizeTC();
    }
    render () {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.userAuth.login,
        isAuth: state.userAuth.isAuth
    }
};

export default connect(mapStateToProps, {autorizeTC})(HeaderContainer);