import { GLOBALTYPES } from './globalTypes';
import { postDataAPI } from '@/utils/fetchData';

export const login = (data) => async (dispatch) => {
    try {
        const res = await postDataAPI('login', data);
        console.log(res);
        localStorage.setItem('firstLogin', true);
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.data.user));

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.data.token,
                user: res.data.data.user,
            },
        });

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message,
            },
        });
    } catch (err) {
        console.log('err', err);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.message,
            },
        });
    }
};

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        // await postDataAPI("logout");
        dispatch({
            type: GLOBALTYPES.LOGOUT,
            payload: {
                user: null,
            },
        });
        window.location.href = '/';
    } catch (err) {
        // dispatch({
        //     type: GLOBALTYPES.ALERT,
        //     payload: { error: err.response.data.err }
        // });
    }
};
