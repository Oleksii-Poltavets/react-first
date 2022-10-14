import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {updateNewMessageTextAC, sendMessageAC} from '../../redux/dialogsPageReducer'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextAC(text));
        },
        sendMessage: (text) => {
            dispatch(sendMessageAC(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;