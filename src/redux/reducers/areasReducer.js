import { GLOBALTYPES } from '@/redux/actions/globalTypes';

const initialState = {
    id: 0,
    data: [],
};

const areaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.LOADAREAS:
            return {
                data: action.payload,
            };
        case GLOBALTYPES.LOADAREAID:
            return {
                id: action.payload,
            };
        default:
            return state;
    }
};

export default areaReducer;
