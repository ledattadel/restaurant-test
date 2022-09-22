import {
    postDataAPI,
    getDataAPI,
    getWithParams,
    deleteWithParams,
    putDataAPI,
    postDataAPIWithFile,
    getNoneParams,
} from '@/utils/fetchData';
import * as DishReducer from '../reducers/dishReducer';
import { GLOBALTYPES } from './globalTypes';
import * as Model from '@/utils/ModelTransform';
import * as MenuAction from '@/redux/actions/menuAction';
import axios from 'axios';

export const getAllDishes = async () => {
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
            path: `dishes/statuses`,
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const submitDish = (payload) => async (dispatch) => {
    try {
        console.log('payload', payload);
        const api = await postDataAPIWithFile('dishes', payload);

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: 'Saved',
            },
        });

        // dispatch({ type: SHOW_SNACKBAR, payload: {type: 'success', message: ''}});
        return api;
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: error,
            },
        });
        console.log(error);
        // dispatch({ type: SHOW_SNACKBAR, payload: {type: 'error', message: error.data}});
    }
};

// export const deleteImage = (imgName) => async dispatch => {
//     try {
//         const response = await deletePhotoApi(imgName);
//         dispatch({ type: DELETE_IMAGE_SUCCESS, payload: response });
//         return response;
//     } catch(error) {
//         dispatch({type: DELETE_IMAGE_ERROR, payload: error.data});
//     }
// }

// export const uploadImage = (payload) => async dispatch => {
//     try {
//         const response = await uploadImageApi(payload.picture);
//         dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: response });
//         return response;
//     } catch(error) {
//         dispatch({type: UPLOAD_IMAGE_ERROR, payload: error.data});
//     }
// }

export const deleteDish = (payload) => async (dispatch) => {
    try {
        // if(payload.picture) {
        //     await deletePhotoApi(payload.picture);
        // }

        const { data } = await deleteWithParams({ path: 'dish', params: { payload } });

        console.log(data);
        dispatch({ type: DishReducer.DELETE_DISH_SUCCESS, payload });
        if (data.data === false) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {
                    error: 'Delete error',
                },
            });
        } else
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {
                    success: 'You deleted it',
                },
            });
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

// export const initFormData = (payload) => dispatch => {
//     // dispatch({ type: payload.id ? EDIT_DISH : INIT_DISH, payload: mapToViewModel(payload) });
// }
