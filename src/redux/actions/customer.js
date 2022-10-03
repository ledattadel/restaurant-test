import constants from '@/redux/constants/customer';
import fetch from '@/service/customer';
const currentUser = JSON.parse(localStorage.getItem('user'));

const actions = {
    getCustomers: (search, take, page, sortName) => async (dispatch, getState) => {
        try {
            dispatch({ type: constants.CUSTOMER_ALL_REQUEST });

            const { data } = await fetch.GetCustomerALL({
                companyId: currentUser.companyId || "137",
                search,
                take,
                page,
                sortName,
            });

            dispatch({
                type: constants.CUSTOMER_ALL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.CUSTOMER_ALL_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    },

    getCustomerDetail: (id) => async (dispatch, getState) => {
        try {
            dispatch({ type: constants.CUSTOMER_DETAIL_REQUEST });

            const { data } = await fetch.GetCustomerDetail(id);

            dispatch({
                type: constants.CUSTOMER_DETAIL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.CUSTOMER_DETAIL_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    },

    createCustomer: (customer) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.CUSTOMER_CREATE_REQUEST,
            });

            const { data } = await fetch.CreateCustomer(customer);

            dispatch({
                type: constants.CUSTOMER_CREATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.CUSTOMER_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    },

    deleteCustomer: (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.CUSTOMER_DELETE_REQUEST,
            });

            const { data } = await fetch.DeleteCustomer(id);

            console.log(data);
            dispatch({
                type: constants.CUSTOMER_DELETE_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: constants.CUSTOMER_DELETE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    },

    updatedCustomer: (id, customer) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.CUSTOMER_UPDATE_REQUEST,
            });

            const { data } = await fetch.UpdateCustomer(id, customer);

            dispatch({
                type: constants.CUSTOMER_UPDATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.CUSTOMER_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
    },
};

export default actions;
