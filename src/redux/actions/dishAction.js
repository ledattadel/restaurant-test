import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI } from '@/utils/fetchData';
import { idID } from '@mui/material/locale';
import * as DishReducer from '../reducers/dishReducer';
import { GLOBALTYPES } from './globalTypes';
import * as Model from '@/utils/ModelTransform';
import * as MenuAction from '@/redux/actions/menuAction';

// import { mapToApiModel, mapToViewModel } from '../../utils/ModelTransform';

// import {SHOW_SNACKBAR} from '../../layouts/action';

// export const searchDishes = (payload) => async dispatch => {
//     try {

//         const response = await searchApi(payload);

//         return response;
//     } catch(error) {

//     }
// }

export const getAllDishes = async () => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        console.log(currentUser);
        const { data } = await getWithParams({ path: `dish`, params: { storeId: currentUser.storeId } });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const submitDish = (payload) => async (dispatch) => {
    console.log('co edit hay khong?', payload.id);
    let isEdit = payload.id;

    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                promise: 'Saving!',
            },
        });

        // Upload picture if exist;
        // if (payload.picture instanceof File) {
        //     payload.picture = await uploadImageApi(payload.picture);
        //     dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: payload.picture });
        // }
        // Submit
        console.log('Data in action:', payload);
        console.log('payload.id', payload.id);
        const api = payload.id ? await putDataAPI('dish', payload) : await postDataAPI('dish', payload);

        const model = Model.mapToApiModel({
            ...payload,
        });
        console.log('Model:', model);
        let response = model;
        // const response = await api(model);
        // console.log('api(model)', response);
        await MenuAction.fetchStoreMenu(true);

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
