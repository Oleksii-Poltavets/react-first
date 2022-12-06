import {applyMiddleware, combineReducers ,legacy_createStore as createStore} from 'redux';
import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import sideBarReducer from './sideBarReducer';
import usersPageReducer from './usersPageReducer';
import userAuthReducer from './userAuthReducer';
import thunkMiddlewhare from 'redux-thunk';

let reducers = combineReducers( {
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    userAuth: userAuthReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlewhare));

window.store = store

export default store;

