import { GLOBALTYPES } from '@/redux/actions/globalTypes';

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.LOGOUT:
            return {
                user: null,
            };
        case GLOBALTYPES.AUTH:
            return action.payload;
        default:
            return state;
    }
};

export default authReducer;
