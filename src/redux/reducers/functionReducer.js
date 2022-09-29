import { GLOBALTYPES } from '@/redux/actions/globalTypes';
const initialState = {};

const functionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.SHOWMODAL:
            return action.payload;
        default:
            return state;
    }
};

export default functionReducer;
