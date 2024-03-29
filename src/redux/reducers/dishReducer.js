import { GLOBALTYPES } from '@/redux/actions/globalTypes';
const initialState = {};

const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.LOADDISH:
            return {
                data: action.payload,
            };
        default:
            return state;
    }
};

export default dishReducer;
