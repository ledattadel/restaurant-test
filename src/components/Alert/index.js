import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import toast, { Toaster } from 'react-hot-toast';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';

const Alert = () => {
    const dispatch = useDispatch();
    const { alert } = useSelector((state) => state);
    const killNotify = () => dispatch({ type: GLOBALTYPES.ALERT, payload: {} });

    return (
        <div>
            {alert.error &&
                toast.error(`${alert.error}`, {
                    toastId: 'error1',
                }) &&
                killNotify()}

            {alert.success &&
                toast.success(`${alert.success}`, {
                    toastId: 'success1',
                }) &&
                killNotify()}
        </div>
    );
};

export default Alert;
