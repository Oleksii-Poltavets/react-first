import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogItem from './components/Dialogs/DialogItem/DialogItem';
import Message from './components/Dialogs/Message/Message';

const postsData = [
    {message: 'Hello, it\'s my first post.', id: 1, likes: 5},
    {message: 'Here I will post my progress in the course.', id: 2, likes: 10},
    {message: 'Hope yall doing well!', id: 3, likes: 15},
];

const dialogItemsData = [
    {name: 'Gena', id: 1},
    {name: 'Oksana', id: 2},
    {name: 'Vitaly', id: 3},
    {name: 'Valentin', id: 4},
];

const messagesData = [
    {message: 'Hi', id: 1},
    {message: 'What\'s up?', id: 2},
    {message: 'Fine thanks :)', id: 3},
    {message: 'Great!', id: 4},
];

const dialogsElements = dialogItemsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = messagesData
    .map((message) => <Message messageText={message.message} id={message.id}/>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App 
    postsData={postsData}
    dialogsElements={dialogsElements}
    messagesElements={messagesElements}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
