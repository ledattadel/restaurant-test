import { GLOBALTYPES } from '@/redux/actions/globalTypes';
const initialState = {};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.LOADTABLES:
            return {
                data: action.payload,
            };
        default:
            return state;
    }
};

export default tableReducer;
