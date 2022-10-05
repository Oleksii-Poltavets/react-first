const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_MESSAGE:
            const newMessageTo = {
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU',
                message: action.messageText, 
                id: 5,
                from: 'to'}
            state.messagesData.push(newMessageTo);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
};

export const sendMessageAC = (text) => ({type: SEND_MESSAGE, messageText: text});
export const updateNewMessageTextAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text,});

export default dialogsPageReducer;