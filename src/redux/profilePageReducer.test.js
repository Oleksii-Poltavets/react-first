import profilePageReducer, { addPost } from "./profilePageReducer";

it('postsData arr should be incremented', () => {
    let action = addPost("asdasd");
    let states = {
        postsData: [
            {message: 'Hello, it\'s my first post.', id: 1, likes: 5},
            {message: 'Here I will post my progress in the course.', id: 2, likes: 10},
            {message: 'Hope yall doing well!', id: 3, likes: 15},
        ]
    };
    let newState = profilePageReducer(states, action);
    expect(newState.postsData.length).toBe(4);
});