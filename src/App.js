import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile/>} />
                        <Route path='/dialogs/*' element={<DialogsContainer/>} />
                        <Route path='/news/*' element={<News/>} />
                        <Route path='/music/*' element={<Music/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
