import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    const dialogsElements = props.state.dialogItemsData
    .map(dialog => <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.state.messagesData
        .map((message) =>  {
            if(message.from === 'from') {
                return <Message className={`${styles.message}`} avatar={message.avatar} messageText={message.message} id={message.id}/>
            } else if (message.from === 'to') {
                return <Message className={`${styles.message} ${styles.from}`} avatar={message.avatar} messageText={message.message} id={message.id}/>
            }
            return 'Your message have no "from" vlaue';
        });

    const textArea = React.createRef();
    const updateNewMessageText = () => {
        let text = textArea.current.value;
        props.dispatch(props.updateNewMessageTextAC(text));
    };
    const sendMessage = () => {
        let text = textArea.current.value;
        props.dispatch(props.sendMessageAC(text));
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div className={styles.messages__inner}>
                    {messagesElements}
                </div>
                <div className={styles.sendMessage}>
                    <textarea className={styles.sendMessage__textArea} 
                    name="addMessage" 
                    placeholder='Message'
                    ref={textArea}
                    value={props.state.newMessageText}
                    onChange={updateNewMessageText}></textarea>
                    <button onClick={sendMessage} className={styles.sendButton}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;