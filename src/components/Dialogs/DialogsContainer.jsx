import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/dialogsPageReducer'
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const DialogsContainer = (props) => {
    return (
        <Dialogs {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.userAuth.isAuth,
    }
};


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {sendMessage})
)(DialogsContainer);