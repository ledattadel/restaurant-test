import { GLOBALTYPES } from '@/redux/actions/globalTypes';
const initialState = {};

const areaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.LOADAREAS:
            return {
                data: action.payload,
            };
        default:
            return state;
    }
};

export default areaReducer;
