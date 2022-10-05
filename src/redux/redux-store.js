import {combineReducers ,legacy_createStore as createStore} from 'redux';
import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import sideBarReducer from './sideBarReducer';

let reducers = combineReducers( {
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    sideBar: sideBarReducer,
});

let store = createStore(reducers);

export default store;

