import React from 'react';
import { EyeOpen, EyeClosed } from 'akar-icons';

let eyesChangeColor = (color) => (
    <EyeOpen
        style={{
            color: `${color}`,
        }}
        strokeWidth={2}
        size={36}
    />
);
let eyesClosedChangeColor = (color) => (
    <EyeClosed
        style={{
            color: `${color}`,
        }}
        strokeWidth={2}
        size={36}
    />
);

const eyes = ({ isHandle, isOpen }) => {
    return isHandle === true
        ? isOpen === true
            ? eyesChangeColor('#F78B2D')
            : eyesClosedChangeColor('#F78B2D')
        : eyesClosedChangeColor('#A3A3A3');
};

export default eyes;
// "#A3A3A3"
