import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_LOADER = 'TOGGLE-LOADER';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 20,
    isFetch: false,
    followingInProgress: [],
};

const usersPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    } 
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    } 
                    return user;
                }),
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsers};
        case TOGGLE_LOADER:
            return {...state, isFetch: action.isFetch};
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetch
                    ? [...state.followingInProgress, action.followingId]
                    : state.followingInProgress.filter(id => id !== action.followingId)
            }
        default: 
            return state;
    }
};

//action creators
export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const toggleIsFetch = (isFetch) => ({type: TOGGLE_LOADER, isFetch});
export const toggleFollowingInProgress = (isFetch, followingId) => ({type: FOLLOWING_IN_PROGRESS, isFetch, followingId});

//thunks
export const getUsersTC = (currentPage, page) => {
    return (dispatch) => {
        dispatch(toggleIsFetch(true));
        usersAPI.getUsers(currentPage, page).then( data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetch(false));
        });
    };
}
export const setUsersPageTC = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(toggleIsFetch(true));
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(toggleIsFetch(false));
        });
    }
}
export const followTC = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.follow(id).then(
            responce => {
                if(responce.data.resultCode === 0) {
                    dispatch(followSucces(id));
                    dispatch(toggleFollowingInProgress(false, id));
                }
            }
        )
    }
}

export const unFollowTC = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.unFollow(id).then(
            responce => {
                if(responce.data.resultCode === 0) {
                    dispatch(unfollowSucces(id));
                    dispatch(toggleFollowingInProgress(false, id));
                }
            }
        )
    }
}

export default usersPageReducer;