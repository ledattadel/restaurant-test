import constants from '@/redux/constants/account';

export const UserAllReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case constants.USER_ALL_REQUEST:
            return { loading: true, users: [] };
        case constants.USER_ALL_SUCCESS:
            return { loading: false, users: action.payload };
        case constants.USER_ALL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const UserDetailReducer = (state = { User: {} }, action) => {
    switch (action.type) {
        case constants.USER_DETAIL_REQUEST:
            return { loading: true, User: {} };
        case constants.USER_DETAIL_SUCCESS:
            return { loading: false, User: action.payload };
        case constants.USER_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const UserCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.USER_CREATE_REQUEST:
            return { loading: true };
        case constants.USER_CREATE_SUCCESS:
            return { loading: false, success: true };
        case constants.USER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.USER_CREATE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const UserDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.USER_DELETE_REQUEST:
            return { loading: true };
        case constants.USER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case constants.USER_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        case constants.USER_DELETE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const UserUpdateReducer = (state = { User: {} }, action) => {
    switch (action.type) {
        case constants.USER_UPDATE_REQUEST:
            return { loading: true };
        case constants.USER_DETAIL_SUCCESS:
            return { loading: false, success: true, User: action.payload };
        case constants.USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.USER_UPDATE_RESET:
            return { User: {} };
        default:
            return state;
    }
};
