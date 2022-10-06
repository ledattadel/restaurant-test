import constants from '@/redux/constants/category';

export const CategoryAllReducer = (state = { categorys: [] }, action) => {
    switch (action.type) {
        case constants.CATEGORY_ALL_REQUEST:
            return { loading: true, categorys: [] };
        case constants.CATEGORY_ALL_SUCCESS:
            return { loading: false, categorys: action.payload };
        case constants.CATEGORY_ALL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const CategoryDetailReducer = (state = { categorys: {} }, action) => {
    switch (action.type) {
        case constants.CATEGORY_DETAIL_REQUEST:
            return { loading: true, categorys: {} };
        case constants.CATEGORY_DETAIL_SUCCESS:
            return { loading: false, categorys: action.payload };
        case constants.CATEGORY_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const CategoryCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.CATEGORY_CREATE_REQUEST:
            return { loading: true };
        case constants.CATEGORY_CREATE_SUCCESS:
            return { loading: false, success: true };
        case constants.CATEGORY_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.CATEGORY_CREATE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const CategoryDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.CATEGORY_DELETE_REQUEST:
            return { loading: true };
        case constants.CATEGORY_DELETE_SUCCESS:
            return { loading: false, success: true };
        case constants.CATEGORY_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        case constants.CATEGORY_DELETE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const CategoryUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.CATEGORY_UPDATE_REQUEST:
            return { loading: true };
        case constants.CATEGORY_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case constants.CATEGORY_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.CATEGORY_UPDATE_RESET:
            return { categorys: {} };
        default:
            return state;
    }
};
