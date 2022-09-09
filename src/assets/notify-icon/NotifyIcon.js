import React from 'react';
import Oval from './oval';
import './index.scss';

const NotifyIcon = ({ number }) => {
    return (
        <div style={{ position: 'relative' }} className="notify-icon">
            <svg
                className="notify-icon-bell"
                width="21"
                height="23"
                viewBox="0 0 21 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.049 13.6075V9.69553C18.049 6.18608 15.6212 3.22971 12.3324 2.34062C12.0068 1.53553 11.2112 0.968262 10.2712 0.968262C9.33124 0.968262 8.53568 1.53553 8.21013 2.34062C4.92124 3.23081 2.49346 6.18608 2.49346 9.69553V13.6075L0.596796 15.4697C0.387907 15.6737 0.27124 15.9508 0.27124 16.241V18.4228C0.27124 19.0261 0.767907 19.5137 1.38235 19.5137H19.1601C19.7746 19.5137 20.2712 19.0261 20.2712 18.4228V16.241C20.2712 15.9508 20.1546 15.6737 19.9457 15.4697L18.049 13.6075ZM18.049 17.3319H2.49342V16.6926L4.39009 14.8304C4.59898 14.6264 4.71564 14.3494 4.71564 14.0592V9.69554C4.71564 6.6879 7.20787 4.24099 10.2712 4.24099C13.3345 4.24099 15.8268 6.6879 15.8268 9.69554V14.0592C15.8268 14.3494 15.9434 14.6264 16.1523 14.8304L18.049 16.6926V17.3319ZM10.2713 22.7864C11.7279 22.7864 12.9457 21.8766 13.4024 20.6046H7.14015C7.59682 21.8766 8.8146 22.7864 10.2713 22.7864Z"
                    fill="white"
                />
            </svg>
            <Oval style={{ position: 'absolute !important', top: '100px' }} className="notify-icon-oval"></Oval>
            <span className="notify-icon-number">{number}</span>
        </div>
    );
};

export default NotifyIcon;
