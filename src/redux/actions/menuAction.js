import { GLOBALTYPES } from './globalTypes';
import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI } from '@/utils/fetchData';

export const fetchStoreMenu = async (forceFetch) => {
    try {
        const cache = sessionStorage.getItem('storeMenus');
        if (cache && !forceFetch) {
            return JSON.parse(cache);
        }
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const { data } = await getWithParams({ path: 'store/menu', params: { storeId: currentUser.storeId } });
        console.log('data in fetchStorageMenu:', data);
        sessionStorage.setItem('storeMenus', JSON.stringify(data));
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchLookup = async (type) => {
    try {
        const cache = sessionStorage.getItem(type);
        if (cache) {
            return JSON.parse(cache);
        }
        const { data } = await getWithParams({ path: 'lookup', params: { type } });
        sessionStorage.setItem(type, JSON.stringify(data));

        const idLookupCache = data.reduce((cacheResults, item) => {
            cacheResults[item.name] = item.id;
            return cacheResults;
        }, {});

        sessionStorage.setItem(type + 'IdLookup', JSON.stringify(idLookupCache));
        return data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateStoreMenu = (payload) => async (dispatch) => {
    try {
        console.log('Menu before update:', payload);

        const { data } = await putDataAPI('store/menu', payload);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: 'You updated it',
            },
        });
        return data;
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: 'Error',
            },
        });
        throw error.response.data;
    }
};

export const deleteStoreMenu = (id) => async (dispatch) => {
    try {
        const { data } = await deleteWithParams({ path: 'store/menu', params: { id } });
        console.log('data delete:', data);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: 'You deleted it',
            },
        });

        return data;
    } catch (error) {
        throw error.response.data;
    }
};
