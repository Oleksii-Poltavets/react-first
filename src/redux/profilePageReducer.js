const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {message: 'Hello, it\'s my first post.', id: 1, likes: 5},
        {message: 'Here I will post my progress in the course.', id: 2, likes: 10},
        {message: 'Hope yall doing well!', id: 3, likes: 15},
    ],
    newPostText: '',
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            const newPost = {
                message: action.postText,
                id: 4,
                likes: 0
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }
};

export const addPostAC = (text) => ({type: ADD_POST, postText: text});
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profilePageReducer;