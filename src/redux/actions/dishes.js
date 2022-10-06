import constants from '@/redux/constants/dishes';
import fetch from '@/service/dishes';
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
    getDishes: () => async (dispatch) => {
        try {
            dispatch({ type: constants.DISHES_ALL_REQUEST });
            // console.log('fetch');
            const { data } = await fetch.GetDishesAll({
                companyId: 137,
            });
            dispatch({
                type: constants.DISHES_ALL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.DISHES_ALL_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    createDishes: (dish) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.DISHES_CREATE_REQUEST,
            });

            const { data } = await fetch.CreateDishes(dish);

            dispatch({
                type: constants.DISHES_CREATE_SUCCESS,
            });
            openNotificationSucces('Create areas success.');
        } catch (error) {
            dispatch({
                type: constants.DISHES_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    deleteDishes: (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.DISHES_DELETE_REQUEST,
            });

            const { data } = await fetch.DeleteDishes(id);

            dispatch({
                type: constants.DISHES_DELETE_SUCCESS,
            });
            openNotificationSucces('Xóa món ăn thành công');
        } catch (error) {
            dispatch({
                type: constants.DISHES_DELETE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    updatedDishes: (id, dish) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.DISHES_UPDATE_REQUEST,
            });

            const { data } = await fetch.UpdateDishes(id, dish);

            dispatch({
                type: constants.DISHES_UPDATE_SUCCESS,
                payload: data,
            });
            openNotificationSucces('Cập nhật món ăn thành công');
        } catch (error) {
            dispatch({
                type: constants.DISHES_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },
};

export default actions;
