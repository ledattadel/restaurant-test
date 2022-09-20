const initialState = {};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER/GETALL':
            return {
                data: action.payload,
            };

        default:
            return state;
    }
};

export default orderReducer;
