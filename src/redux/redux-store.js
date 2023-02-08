import {applyMiddleware, combineReducers ,compose,legacy_createStore as createStore} from 'redux';
import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import sideBarReducer from './sideBarReducer';
import usersPageReducer from './usersPageReducer';
import userAuthReducer from './userAuthReducer';
import thunkMiddlewhare from 'redux-thunk';
import appInitializingReducer from './appInitializingReducer';

let reducers = combineReducers( {
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    userAuth: userAuthReducer,
    appInitialize: appInitializingReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewhare)));

window.store = store

export default store;

