import React from 'react';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: '#e0e0de',
        borderRadius: 50,
    };

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        position: 'relative',
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span
                    style={{
                        fontSize: '14px',
                        color: 'white',
                        position: 'absolute',
                        top: '-1px',
                        right: '10px',
                    }}
                >{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
