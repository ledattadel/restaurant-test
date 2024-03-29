import constants from '@/redux/constants/areas';
import fetch from '@/service/areas';
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
    getAreas: () => async (dispatch) => {
        try {
            dispatch({ type: constants.AREAS_ALL_REQUEST });
            // console.log('fetch');
            const { data } = await fetch.GetAreasAll({
                companyId: 137,
            });
            dispatch({
                type: constants.AREAS_ALL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.AREAS_ALL_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    createAreas: (areas) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.AREAS_CREATE_REQUEST,
            });

            const { data } = await fetch.CreateAreas(areas);

            dispatch({
                type: constants.AREAS_CREATE_SUCCESS,
            });
            openNotificationSucces('Create areas success.');
        } catch (error) {
            dispatch({
                type: constants.AREAS_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    deleteAreas: (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.AREAS_DELETE_REQUEST,
            });

            const { data } = await fetch.DeleteAreas(id);

            dispatch({
                type: constants.AREAS_DELETE_SUCCESS,
            });
            openNotificationSucces('Delete areas success.');
        } catch (error) {
            dispatch({
                type: constants.AREAS_DELETE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    updatedAreas: (id, areas) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.AREAS_UPDATE_REQUEST,
            });

            const { data } = await fetch.UpdateAreas(id, areas);

            dispatch({
                type: constants.AREAS_UPDATE_SUCCESS,
                payload: data,
            });
            openNotificationSucces('Update areas success.');
        } catch (error) {
            dispatch({
                type: constants.AREAS_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    getTable: (areaId) => async (dispatch) => {
        try {
            dispatch({ type: constants.TABLE_ALL_REQUEST });
            // console.log('fetch');
            const { data } = await fetch.GetTableAll({
                companyId: 137,
                areaId: areaId,
            });
            dispatch({
                type: constants.TABLE_ALL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: constants.TABLE_ALL_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    createTable: (areas) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.TABLE_CREATE_REQUEST,
            });

            const { data } = await fetch.CreateTable(areas);

            dispatch({
                type: constants.TABLE_CREATE_SUCCESS,
            });
            openNotificationSucces('Create table success.');
        } catch (error) {
            dispatch({
                type: constants.TABLE_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    deleteTable: (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.TABLE_DELETE_REQUEST,
            });

            const { data } = await fetch.DeleteTable(id);

            dispatch({
                type: constants.TABLE_DELETE_SUCCESS,
            });
            openNotificationSucces('Delete table success.');
        } catch (error) {
            dispatch({
                type: constants.TABLE_DELETE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },

    updatedTable: (id, table) => async (dispatch, getState) => {
        try {
            dispatch({
                type: constants.TABLE_UPDATE_REQUEST,
            });

            const { data } = await fetch.UpdateTable(id, table);

            dispatch({
                type: constants.TABLE_UPDATE_SUCCESS,
                payload: data,
            });
            openNotificationSucces('Update table success.');
        } catch (error) {
            dispatch({
                type: constants.TABLE_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
            error.response && error.response.data.message
                ? openNotificationError(error.response.data.message)
                : openNotificationError(error.message);
        }
    },
};

export default actions;
