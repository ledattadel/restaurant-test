import constants from '@/redux/constants/dishes';

export const DishesAllReducer = (state = { dishes: [] }, action) => {
    switch (action.type) {
        case constants.DISHES_ALL_REQUEST:
            return { loading: true, dishes: [] };
        case constants.DISHES_ALL_SUCCESS:
            return { loading: true, dishes: action.payload };
        case constants.DISHES_ALL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const DishesDetailReducer = (state = { dishes: {} }, action) => {
    switch (action.type) {
        case constants.DISHES_DETAIL_REQUEST:
            return { loading: true, dishes: {} };
        case constants.DISHES_DETAIL_SUCCESS:
            return { loading: false, dishes: action.payload };
        case constants.DISHES_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const DishesCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.DISHES_CREATE_REQUEST:
            return { loading: true };
        case constants.DISHES_CREATE_SUCCESS:
            return { loading: false, success: true };
        case constants.DISHES_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.DISHES_CREATE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const DishesDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.DISHES_DELETE_REQUEST:
            return { loading: true };
        case constants.DISHES_DELETE_SUCCESS:
            return { loading: false, success: true };
        case constants.DISHES_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        case constants.DISHES_DELETE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const DishesUpdateReducer = (state = { dishes: {} }, action) => {
    switch (action.type) {
        case constants.DISHES_UPDATE_REQUEST:
            return { loading: true };
        case constants.DISHES_DETAIL_SUCCESS:
            return { loading: false, success: true, dishes: action.payload };
        case constants.DISHES_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.DISHES_UPDATE_RESET:
            return { AREAS: {} };
        default:
            return state;
    }
};
