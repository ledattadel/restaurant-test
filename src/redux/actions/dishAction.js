import {
    postDataAPI,
    getDataAPI,
    getWithParams,
    deleteWithParams,
    putDataAPI,
    postDataAPIWithFile,
    getNoneParams,
    deleteWithParamsId,
    putWithParamsId,
    putDataAPIWithFile,
} from '@/utils/fetchData';
import * as DishReducer from '../reducers/dishReducer';
import { GLOBALTYPES } from './globalTypes';
import * as Model from '@/utils/ModelTransform';
import * as MenuAction from '@/redux/actions/menuAction';
import axios from 'axios';

export const getAllDishes = (payload) => async (dispatch) => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('user'));

        const { data } = await getWithParams({
            path: `dishes`,
            params: { companyId: currentUser.companyId },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getStatuses = async () => {
    try {
        const { data } = await getNoneParams({
            path: `dish-status`,
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getMenu = async () => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('user'));

        const { data } = await getWithParams({
            path: `menus`,
            params: { companyId: currentUser.companyId },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const submitDish = (payload) => async (dispatch) => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('user'));

        console.log('payload', payload);
        const api = await postDataAPIWithFile('dishes', payload);
        let { data } = await getWithParams({
            path: `dishes`,
            params: { companyId: currentUser.companyId },
        });

        dispatch({ type: GLOBALTYPES.LOADDISH, payload: true });

        return api;
    } catch (error) {
        console.log(error);
        dispatch({ type: GLOBALTYPES.LOADDISH, payload: false });
    }
};

export const submitMenu = (payload, event) => async (dispatch) => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('user'));

        console.log('payload', payload);

        const api = await postDataAPIWithFile('menus', payload);
        const { data } = await getWithParams({
            path: `menus`,
            params: { companyId: currentUser.companyId },
        });
        dispatch({
            type: GLOBALTYPES.LOADCATE,
            payload: data,
        });
        return api;
    } catch (error) {
        console.log(error);
    }
};
export const editMenu = (payload, id) => async (dispatch) => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('user'));

        console.log('payload', payload);

        const api = await putDataAPIWithFile('menus', payload, id);
        console.log('isUpdateSuccess:', api);
        const { data } = await getWithParams({
            path: `menus`,
            params: { companyId: currentUser.companyId },
        });
        dispatch({
            type: GLOBALTYPES.LOADCATE,
            payload: data,
        });
        return api;
    } catch (error) {
        console.log(error);
    }
};

export const deleteDish = (id) => async (dispatch) => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        console.log('id', id);
        const { data } = await deleteWithParamsId(
            {
                path: 'dishes',
                params: { companyId: currentUser.companyId },
            },
            id,
        );
        return data;
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: 'Delete error',
            },
        });
    }
};
