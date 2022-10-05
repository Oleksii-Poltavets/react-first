import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import { addPostAC, updateNewPostTextAC} from './redux/profilePageReducer';
import {sendMessageAC, updateNewMessageTextAC} from './redux/dialogsPageReducer';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar state={props.state.sideBar} store={props.store}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' 
                        element={<Profile 
                                dispatch={props.dispatch}
                                state={props.state.profilePage}
                                addPostAC={addPostAC}
                                updateNewPostTextAC={updateNewPostTextAC}/>} />
                        <Route path='/dialogs/*' 
                        element={<Dialogs 
                        state={props.state.dialogsPage}
                        dispatch={props.dispatch}
                        sendMessageAC={sendMessageAC}
                        updateNewMessageTextAC={updateNewMessageTextAC}/>} />
                        <Route path='/news/*' element={<News/>} />
                        <Route path='/music/*' element={<Music/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
