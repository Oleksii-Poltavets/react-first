import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";

const store = {
    _callSubscriber() {
        console.log('State changed');
    },
    _state: {
        profilePage: {
            postsData: [
                {message: 'Hello, it\'s my first post.', id: 1, likes: 5},
                {message: 'Here I will post my progress in the course.', id: 2, likes: 10},
                {message: 'Hope yall doing well!', id: 3, likes: 15},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogItemsData: [
                {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Gena', id: 1},
                {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Oksana', id: 2},
                {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Vitaly', id: 3},
                {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Valentin', id: 4},
            ],
            messagesData: [
                {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', message: 'Hi', id: 1, from: 'from'},
                {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', message: 'What\'s up?', id: 2, from: 'to'},
                {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', message: 'Fine thanks :)', id: 3, from: 'from'},
                {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', message: 'Great!', id: 4, from: 'to'},
            ],
            newMessageText: '',
        },
        sideBar: {
            closeFriends: [
                {id: '1', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Gena'},
                {id: '2', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Nata'},
                {id: '3', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Donatello'},
            ],
        },
    },
    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;