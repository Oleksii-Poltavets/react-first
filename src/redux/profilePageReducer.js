import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postsData: [
        {message: 'Hello, it\'s my first post.', id: 1, likes: 5},
        {message: 'Here I will post my progress in the course.', id: 2, likes: 10},
        {message: 'Hope yall doing well!', id: 3, likes: 15},
    ],
    newPostText: '',
    userProfile: null,
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                message: action.postText,
                id: state.postsData.length + 2,
                likes: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile,
            };
        default:
            return state;
    }
};

//action creators
export const addPost = (text) => ({type: ADD_POST, postText: text});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

//thunk creators
export const getUserProfileTC = (profileId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(profileId).then(
            response => {
                dispatch(setUserProfile(response.data));
            }
        )
    }
}

export default profilePageReducer;