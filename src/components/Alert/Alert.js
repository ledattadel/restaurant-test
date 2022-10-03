import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Alert = () => {
    const { alert } = useSelector((state) => state);

    const dispatch = useDispatch();
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