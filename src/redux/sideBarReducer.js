let initialState = {
    closeFriends: [
        {id: '1', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Gena'},
        {id: '2', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Nata'},
        {id: '3', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU', name: 'Donatello'},
    ],
};

const sideBarReducer = (state = initialState, action) => {
    return state;
};

export default sideBarReducer;