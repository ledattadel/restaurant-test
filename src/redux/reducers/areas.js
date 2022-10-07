import constants from '@/redux/constants/areas';

export const AreasAllReducer = (state = { areas: [] }, action) => {
    switch (action.type) {
        case constants.AREAS_ALL_REQUEST:
            return { loading: true, areas: [] };
        case constants.AREAS_ALL_SUCCESS:
            return { loading: true, areas: action.payload };
        case constants.AREAS_ALL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const AreasDetailReducer = (state = { areas: {} }, action) => {
    switch (action.type) {
        case constants.AREAS_DETAIL_REQUEST:
            return { loading: true, areas: {} };
        case constants.AREAS_DETAIL_SUCCESS:
            return { loading: false, areas: action.payload };
        case constants.AREAS_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const AreasCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.AREAS_CREATE_REQUEST:
            return { loading: true };
        case constants.AREAS_CREATE_SUCCESS:
            return { loading: false, success: true };
        case constants.AREAS_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.AREAS_CREATE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const AreasDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.AREAS_DELETE_REQUEST:
            return { loading: true };
        case constants.AREAS_DELETE_SUCCESS:
            return { loading: false, success: true };
        case constants.AREAS_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        case constants.AREAS_DELETE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const AreasUpdateReducer = (state = { areas: {}, success: false }, action) => {
    switch (action.type) {
        case constants.AREAS_UPDATE_REQUEST:
            return { loading: true };
        case constants.AREAS_UPDATE_SUCCESS:
            return { loading: false, success: true, areas: action.payload };
        case constants.AREAS_UPDATE_FAIL:
            return { loading: false, success: false, error: action.payload };
        case constants.AREAS_UPDATE_RESET:
            return { areas: {} };
        default:
            return state;
    }
};

export const TableAllReducer = (state = { table: [] }, action) => {
    switch (action.type) {
        case constants.TABLE_ALL_REQUEST:
            return { loading: true, table: [] };
        case constants.TABLE_ALL_SUCCESS:
            return { loading: true, table: action.payload };
        case constants.TABLE_ALL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const TableDetailReducer = (state = { table: {} }, action) => {
    switch (action.type) {
        case constants.TABLE_DETAIL_REQUEST:
            return { loading: true, table: {} };
        case constants.TABLE_DETAIL_SUCCESS:
            return { loading: false, table: action.payload };
        case constants.TABLE_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const TableCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.TABLE_CREATE_REQUEST:
            return { loading: true };
        case constants.TABLE_CREATE_SUCCESS:
            return { loading: false, success: true };
        case constants.TABLE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case constants.TABLE_CREATE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const TableDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.TABLE_DELETE_REQUEST:
            return { loading: true };
        case constants.TABLE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case constants.TABLE_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        case constants.TABLE_DELETE_RESET:
            return { success: false };
        default:
            return state;
    }
};

export const TableUpdateReducer = (state = { table: {}, success: false }, action) => {
    switch (action.type) {
        case constants.TABLE_UPDATE_REQUEST:
            return { loading: true };
        case constants.TABLE_UPDATE_SUCCESS:
            return { loading: false, success: true, table: action.payload };
        case constants.TABLE_UPDATE_FAIL:
            return { loading: false, success: false, error: action.payload };
        case constants.TABLE_UPDATE_RESET:
            return { table: {} };
        default:
            return state;
    }
};
