import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, Form } from 'react-final-form';
import { required } from '../../helpers/validate';

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogItemsData
    .map(dialog => <DialogItem key={dialog.id} avatar={dialog.avatar} name={dialog.name} id={dialog.id}/>);
    
    const messagesElements = props.dialogsPage.messagesData
        .map((message) =>  {
            if(message.from === 'from') {
                return <Message key={message.id} className={`${styles.message}`} avatar={message.avatar} messageText={message.message} id={message.id}/>
            } else if (message.from === 'to') {
                return <Message key={message.id} className={`${styles.message} ${styles.from}`} avatar={message.avatar} messageText={message.message} id={message.id}/>
            }
            return 'Your message have no "from" vlaue';
        });

    const onSubmit = (values) => {
        let text = values.newMessage;
        props.sendMessage(text);
    }

    const SendMessageForm = (props) => {
        return (
            <Form
                onSubmit={onSubmit}
                render= {({ handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit} className={styles.sendMessageForm}>
                            <Field 
                            component="textarea" 
                            placeholder="Message" 
                            name="newMessage" 
                            className={styles.sendMessage__textArea}
                            validate={required}></Field>
                            <button className={styles.sendButton} type="submit">Send</button>
                        </form>
                    )
                }}
            />
        )
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
                    <SendMessageForm/>
                    {/* <textarea className={styles.sendMessage__textArea} 
                    name="addMessage" 
                    placeholder='Message'
                    ref={textArea}
                    value={props.dialogsPage.newMessageText}
                    onChange={updateNewMessageText}></textarea>
                    <button onClick={sendMessage} className={styles.sendButton}>Send</button> */}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;