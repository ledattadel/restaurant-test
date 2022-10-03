import { GLOBALTYPES } from './globalTypes';
import { postDataAPI } from '@/utils/fetchData';

export const login = (data) => async (dispatch) => {
    try {
        //  const res = await postDataAPI('login', data);
        // console.log(res);
        const data = {
            adminId: 0,
            companyId: 137,
        };
        localStorage.setItem('firstLogin', true);
        localStorage.setItem(
            'token',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiY29tcGFueUlkIjoxMzcsImlhdCI6MTY2NDc5NDg1NiwiZXhwIjoxNjY1Mzk5NjU2fQ.ieTvkgTAEjZGq3an0oKweB2lxM5ShmAP_9QIYFTSMDQ',
        );
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('dish', []);

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiY29tcGFueUlkIjoxMzcsImlhdCI6MTY2NDc5NDg1NiwiZXhwIjoxNjY1Mzk5NjU2fQ.ieTvkgTAEjZGq3an0oKweB2lxM5ShmAP_9QIYFTSMDQ',
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
