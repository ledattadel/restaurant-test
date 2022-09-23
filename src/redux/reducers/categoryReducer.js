import { GLOBALTYPES } from '@/redux/actions/globalTypes';
const initialState = {};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.LOADCATE:
            return {
                data: action.payload,
            };
        default:
            return state;
    }
};

export default categoryReducer;
