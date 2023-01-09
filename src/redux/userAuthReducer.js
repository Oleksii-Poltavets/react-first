import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    errorMessages: []
};

const usersPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData
            };
        default: 
            return state;
    }
};

// action creators
export const setUserData = (userData) => ({type: SET_USER_DATA, userData});

//thunk creators
export const autorizeTC = () => {
    return (dispatch) => {
        return authAPI.authMe().then(
            response => {
                if(response.resultCode === 0) {
                    dispatch(setUserData(
                        {
                            id: response.data.id,
                            login: response.data.login,
                            email: response.data.email,
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

export const loginTC = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(
            response => {
                if(response.resultCode === 0) {
                    dispatch(setUserData(
                        {
                            id: response.data.userId,
                            isAuth: true,
                            errorMessages: []
                        }
                    ))
                } else if (response.resultCode === 1){
                    dispatch(setUserData(
                        {
                            errorMessages: [...response.messages]
                        }
                    ))
                }
            }
        )
    }
}

export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout().then(
            response => {
                dispatch(setUserData(
                    {
                        id: null,
                        email: null,
                        password: null,
                        isAuth: false
                    }
                ))
            }
        )
    }
}

export default usersPageReducer;