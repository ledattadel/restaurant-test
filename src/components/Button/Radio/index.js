import React from 'react';

const Radio = ({ status }) => {
    return (
        <label for={status} className="radio">
            <input type="radio" className="radio__input" name="myRadioField" id={status} />
            <div className="radio__radio"></div>
            {status}
        </label>
    );
};

export default Radio;
