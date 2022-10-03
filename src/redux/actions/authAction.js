import { GLOBALTYPES } from './globalTypes';
import { postDataAPI } from '@/utils/fetchData';

export const login = (data) => async (dispatch) => {
    try {
        //  const res = await postDataAPI('login', data);
        // console.log(res);
        const data = {
            adminId: 0,
            companyId: 0,
        };
        localStorage.setItem('firstLogin', true);
        localStorage.setItem(
            'token',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiY29tcGFueUlkIjoxMzcsImlhdCI6MTY2NDcwNjg1NywiZXhwIjoxNjY0NzkzMjU3fQ.goyKv2I6nG6hU_-VYPdDrUW5mShEHjbFpk2SVSFP51E',
        );
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('table', []);

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: '123',
                user: data,
            },
        });

        // dispatch({
        //     type: GLOBALTYPES.ALERT,
        //     payload: {
        //         success: 'Đăng nhập thành công',
        //     },
        // });
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
