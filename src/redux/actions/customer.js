import constants from '@/redux/constants/customer';
import fetch from '@/service/customer';
import { notification } from 'antd';

const openNotificationError = (message) => {
    notification.error({
        message: `Faild`,
        description: `${message}`,
        placement: 'topRight',
    });
};

const openNotificationSucces = (message) => {
    notification.success({
        message: `Success`,
        description: `${message}`,
        placement: 'topRight',
    });
};

const actions = {
    getCustomers: (search, take, page, sortName) => async (dispatch, getState) => {
        try {
            dispatch({ type: constants.CUSTOMER_ALL_REQUEST });

            const { data } = await fetch.GetCustomerALL({
                companyId: 137,
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
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
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
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
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
            });
            openNotificationSucces('Create customer success.');
        } catch (error) {
            dispatch({
                type: constants.CUSTOMER_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    deleteCustomer: (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.CUSTOMER_DELETE_REQUEST,
            });

            const { data } = await fetch.DeleteCustomer(id);

            dispatch({
                type: constants.CUSTOMER_DELETE_SUCCESS,
            });
            openNotificationSucces('Delete customer success.');
        } catch (error) {
            dispatch({
                type: constants.CUSTOMER_DELETE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
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
            openNotificationSucces('Update customer success.');
        } catch (error) {
            dispatch({
                type: constants.CUSTOMER_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },
};

export default actions;
