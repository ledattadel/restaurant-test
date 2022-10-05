import {
    postDataAPI,
    getDataAPI,
    getWithParams,
    deleteWithParams,
    putDataAPI,
    postDataAPIWithFile,
    getNoneParams,
    deleteWithParamsId,
} from '@/utils/fetchData';
import * as DishReducer from '../reducers/dishReducer';
import { GLOBALTYPES } from './globalTypes';
import * as Model from '@/utils/ModelTransform';
import * as MenuAction from '@/redux/actions/menuAction';
import axios from 'axios';

export const getAllAreas = (payload) => async (dispatch) => {
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
            path: `areas/status`,
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const submitAreas = (payload) => async (dispatch) => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('user'));

        console.log('payload', payload);
        const api = await postDataAPI('areas', payload);
        let { data } = await getWithParams({
            path: `areas`,
            params: { companyId: currentUser.companyId },
        });

        dispatch({ type: GLOBALTYPES.LOADAREAS, payload: data });

        return api;
    } catch (error) {
        console.log(error);
        // dispatch({ type: GLOBALTYPES.LOADDISH, payload: { loaddish: false } });
    }
};

export const deleteArea = (id) => async (dispatch) => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        console.log('id', id);
        const { data } = await deleteWithParamsId(
            {
                path: 'areas',
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
