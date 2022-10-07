import React from 'react';

const SizeChanger = ({ take, setTake }) => {
    return (
        <div className="size-changer">
            <p className="size-change__title">Show</p>{' '}
            <input
                type="number"
                className="size-change__input"
                min={1}
                max={999}
                value={take}
                onChange={(e) => setTake(e.target.value)}
            />
        </div>
    );
};

export default SizeChanger;
