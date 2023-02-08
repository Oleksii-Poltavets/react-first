import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeTC } from './redux/appInitializingReducer';
import Loader from './components/common/Loader/Loader';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeTC();
    }

    render() {
        if(!this.props.initialized) {
            return <Loader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path='/profile/*' element={<ProfileContainer/>} />
                            <Route path='/dialogs/*' element={<DialogsContainer/>} />
                            <Route path='/users/*' element={<UsersContainer/>} />
                            <Route path='/news/*' element={<News/>} />
                            <Route path='/music/*' element={<Music/>} />
                            <Route path='/login/*' element={<LoginPage/>} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth,
        initialized: state.appInitialize.initialized
    }
}

export default connect(mapStateToProps, {initializeTC})(App);