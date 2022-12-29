import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
// const TOGGLE_AUTH = 'TOGGLE-AUTH';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

const usersPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData
            };
        // case TOGGLE_AUTH:
        //     return {
        //         ...state,
        //         isAuth: action.isAuth
        //     };
        default: 
            return state;
    }
};

// action creators
export const setUserData = (userData) => ({type: SET_USER_DATA, userData});
// export const toggleAuth = (isAuth) => ({type: TOGGLE_AUTH, isAuth});

//thunk creators
export const autorizeTC = () => {
    return (dispatch) => {
        authAPI.authMe().then(
            responce => {
                if(responce.resultCode === 0) {
                    dispatch(setUserData(
                        {
                            id: responce.data.id,
                            login: responce.data.login,
                            email: responce.data.email,
                            isAuth: true
                        }
                    ))
                } else {
                    console.log('You need to login on https://social-network.samuraijs.com/');
                }
            }
        )
    }
}

export default usersPageReducer;