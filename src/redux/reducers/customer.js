import constants from '@/redux/constants/customer';

export const CustomerAllReducer = (state = { customers: [] }, action) => {
    switch (action.type) {
        case constants.CUSTOMER_ALL_REQUEST:
            return { loading: true, customers: [] };
        case constants.CUSTOMER_ALL_SUCCESS:
            return { loading: true, customers: action.payload };
        case constants.CUSTOMER_ALL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const CustomerDetailReducer = (state = { customer: {} }, action) => {
    switch (action.type) {
        case constants.CUSTOMER_DETAIL_REQUEST:
            return { loading: true, customer: {} };
        case constants.CUSTOMER_DETAIL_SUCCESS:
            return { loading: false, customer: action.payload };
        case constants.CUSTOMER_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const CustomerCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.CUSTOMER_CREATE_REQUEST:
            return { loading: true };
        case constants.CUSTOMER_CREATE_SUCCESS:
            return { loading: false, success: true };
        case constants.CUSTOMER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.CUSTOMER_CREATE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const CustomerDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.CUSTOMER_DELETE_REQUEST:
            return { loading: true };
        case constants.CUSTOMER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case constants.CUSTOMER_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        case constants.CUSTOMER_DELETE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const CustomerUpdateReducer = (state = { customer: {} }, action) => {
    switch (action.type) {
        case constants.CUSTOMER_UPDATE_REQUEST:
            return { loading: true };
        case constants.CUSTOMER_DETAIL_SUCCESS:
            return { loading: false, success: true, customer: action.payload };
        case constants.CUSTOMER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.CUSTOMER_UPDATE_RESET:
            return { customer: {} };
        default:
            return state;
    }
};
