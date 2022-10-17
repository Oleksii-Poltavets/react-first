import {combineReducers ,legacy_createStore as createStore} from 'redux';
import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import sideBarReducer from './sideBarReducer';
import usersPageReducer from './usersPageReducer';

let reducers = combineReducers( {
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    sideBar: sideBarReducer,
    users: usersPageReducer,
});

let store = createStore(reducers);

export default store;

