import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';
const CHANGE_PROFILE_IMAGE = 'CHANGE-PROFILE-IMAGE';

let initialState = {
    postsData: [
        {message: 'Hello, it\'s my first post.', id: 1, likes: 5},
        {message: 'Here I will post my progress in the course.', id: 2, likes: 10},
        {message: 'Hope yall doing well!', id: 3, likes: 15},
    ],
    userProfile: null,
    status: '',
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                message: action.postText,
                id: state.postsData.length + 1,
                likes: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case CHANGE_PROFILE_IMAGE:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.image},
            };
        default:
            return state;
    }
};

//action creators
export const addPost = (postText) => ({type: ADD_POST, postText});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updateStatus = (status) => ({type: UPDATE_STATUS, status});
export const changeProfileImage = (image) => ({type: CHANGE_PROFILE_IMAGE, image})

//thunk creators
export const getUserProfileTC = (profileId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(profileId).then(
            response => {
                dispatch(setUserProfile(response.data));
            }
        )
    }
}

export const getStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(
            response => {
                dispatch(setStatus(response.data));
            }
        );
    }
}

export const updateStatusTC = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(
            dispatch(updateStatus(status))
        );
    }
}

export const changeImageTC = (imageFile) => {
    return (dispatch) => {
        profileAPI.changeProfilePicture(imageFile).then(
            response => {
                dispatch(changeProfileImage(response.data.data.photos));
            }
        );
    };
}

export default profilePageReducer;