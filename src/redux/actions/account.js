import constants from '@/redux/constants/account';
import fetch from '@/service/account';
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
    getUsers: (search, take, page, sortName) => async (dispatch, getState) => {
        try {
            dispatch({ type: constants.USER_ALL_REQUEST });

            const { data } = await fetch.GetUserALL({
                companyId: 137,
                search,
                take,
                page,
                sortName,
            });

            dispatch({
                type: constants.USER_ALL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.USER_ALL_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    getUserDetail: (id) => async (dispatch, getState) => {
        try {
            dispatch({ type: constants.USER_DETAIL_REQUEST });

            const { data } = await fetch.GetUserDetail(id);

            dispatch({
                type: constants.USER_DETAIL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.USER_DETAIL_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    createUser: (User) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.USER_CREATE_REQUEST,
            });

            const { data } = await fetch.CreateUser(User);

            dispatch({
                type: constants.USER_CREATE_SUCCESS,
            });
            openNotificationSucces('Create User success.');
        } catch (error) {
            dispatch({
                type: constants.USER_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    deleteUser: (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.USER_DELETE_REQUEST,
            });

            const { data } = await fetch.DeleteUser(id);

            dispatch({
                type: constants.USER_DELETE_SUCCESS,
            });
            openNotificationSucces('Delete User success.');
        } catch (error) {
            dispatch({
                type: constants.USER_DELETE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    updatedUser: (id, User) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.USER_UPDATE_REQUEST,
            });

            const { data } = await fetch.UpdateUser(id, User);

            dispatch({
                type: constants.USER_UPDATE_SUCCESS,
                payload: data,
            });
            openNotificationSucces('Update User success.');
        } catch (error) {
            dispatch({
                type: constants.USER_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },
};

export default actions;
