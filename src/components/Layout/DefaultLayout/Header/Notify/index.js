import React from 'react';
import './index.scss';
import NoneNotify from '@/assets/notify-icon/NoneNotify';
import NotifyIcon from '@/assets/notify-icon/NotifyIcon';

const Notify = () => {
    return (
        <div className="header_notify">
            {/* <NoneNotify></NoneNotify> */}
            <NotifyIcon number={5}></NotifyIcon>
        </div>
    );
};

export default Notify;
