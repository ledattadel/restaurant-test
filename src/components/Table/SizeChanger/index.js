import React from 'react';

const SizeChanger = () => {
    return (
        <div className="size-changer">
            <p className="size-change__title">Show</p> <input type="number" className="size-change__input" min={1} max={999}/>
        </div>
    );
};

export default SizeChanger;
