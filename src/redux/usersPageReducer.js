const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            userName: 'Oleksii',
            title: 'I\'m react programmer',
            location: {
                country: 'Canada',
                city: 'Winnipeg'
            },
            avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU',
            followed: false,
        },
        {
            id: 2,
            userName: 'Nataly',
            title: 'I\'m a happy person',
            location: {
                country: 'Canada',
                city: 'Winnipeg'
            },
            avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU',
            followed: true,
        },
        {
            id: 3,
            userName: 'Mykola',
            title: 'I\'m chilin',
            location: {
                country: 'Ukraine',
                city: 'Kharkiv'
            },
            avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU',
            followed: false,
        },
    ]
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
            return {
                ...state,
                users: [...state, ...action.users],
            };
        default: 
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersPageReducer;