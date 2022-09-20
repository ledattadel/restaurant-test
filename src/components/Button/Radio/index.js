import React from 'react';

const Radio = ({ status, checked }) => {
    return (
        <label htmlFor={status} className="radio">
            {checked && checked === true ? (
                <input type="radio" className="radio__input" name="myRadioField" id={status} defaultChecked />
            ) : (
                <input type="radio" className="radio__input" name="myRadioField" id={status} />
            )}
            <div className="radio__radio"></div>
            {status}
        </label>
    );
};

export default Radio;
