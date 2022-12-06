import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {updateNewMessageText, sendMessage} from '../../redux/dialogsPageReducer'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage})(Dialogs);

export default DialogsContainer;