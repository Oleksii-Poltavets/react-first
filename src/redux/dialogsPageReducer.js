const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
};

const dialogsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: 
            const newMessageTo = {
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU',
                message: action.messageText,
                id: (state.messagesData.length + 2),
                from: 'to'};
            return {
                ...state,
                messagesData: [...state.messagesData, newMessageTo]
            };
        default:
            return state;
    }
};

export const sendMessage = (messageText) => ({type: SEND_MESSAGE, messageText});

export default dialogsPageReducer;