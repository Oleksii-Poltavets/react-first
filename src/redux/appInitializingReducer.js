import { autorizeTC } from "./userAuthReducer";

const APP_INITIALIZED = 'APP-INITIALIZED';

const initialState = {
    initialized: false
}

const appInitializingReducer = (state = initialState, action) => {
    switch(action.type) {
        case APP_INITIALIZED: 
            return {
                ...state,
                initialized: true
            }
        default: 
            return state;
    }
}

const initializeApp = () => ({type: APP_INITIALIZED});

export const initializeTC = () => {
    return (dispatch) => {
        let promise = dispatch(autorizeTC());
        Promise.all([promise]).then( () => {
            dispatch(initializeApp());
        })
    }
}

export default appInitializingReducer;