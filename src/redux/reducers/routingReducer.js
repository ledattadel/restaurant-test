import { GLOBALTYPES } from '@/redux/actions/globalTypes';

const initialState = {};

const routingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.STORELOCATION:
            return action.payload;
        default:
            return state;
    }
};

export default routingReducer;
