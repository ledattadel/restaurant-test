import constants from '@/redux/constants/category';
import fetch from '@/service/category';
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
    GetCategory: () => async (dispatch) => {
        try {
            dispatch({ type: constants.CATEGORY_ALL_REQUEST });
            // console.log('fetch');
            const { data } = await fetch.GetCategoryAll({
                companyId: 137,
            });
            dispatch({
                type: constants.CATEGORY_ALL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.CATEGORY_ALL_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    // getCustomerDetail: (id) => async (dispatch, getState) => {
    //     try {
    //         dispatch({ type: constants.CUSTOMER_DETAIL_REQUEST });

    //         const { data } = await fetch.GetCustomerDetail(id);

    //         dispatch({
    //             type: constants.CUSTOMER_DETAIL_SUCCESS,
    //             payload: data,
    //         });
    //     } catch (error) {
    //         dispatch({
    //             type: constants.CUSTOMER_DETAIL_FAIL,
    //             payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    //         });
    //         error.response && error.response.data.message
    //             ? openNotificationError(error.response.data.message)
    //             : openNotificationError(error.message);
    //     }
    // },

    createCategory: (category) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.CATEGORY_CREATE_REQUEST,
            });

            const { data } = await fetch.CreateCategory(category);

            dispatch({
                type: constants.CATEGORY_CREATE_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: constants.CATEGORY_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    deleteCategory: (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.CATEGORY_DELETE_REQUEST,
            });

            const { data } = await fetch.DeleteCategory(id);

            dispatch({
                type: constants.CATEGORY_DELETE_SUCCESS,
            });
            openNotificationSucces('Xoá danh mục thành công');
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

    updateCategory: (id, category) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.CATEGORY_UPDATE_REQUEST,
            });

            const { data } = await fetch.UpdateCategory(id, category);

            dispatch({
                type: constants.CATEGORY_UPDATE_SUCCESS,
            });
            openNotificationSucces('Cập nhật danh mục thành công');
        } catch (error) {
            dispatch({
                type: constants.CATEGORY_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },
};

export default actions;
