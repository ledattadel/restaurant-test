import React from 'react';

const EditIcon = ({ color }) => {
    return (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5575 19.0911H20.1149H10.5575Z" fill={color} />
            <path
                d="M10.5575 19.0911H20.1149"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.3362 1.56898C15.7587 1.14652 16.3317 0.90918 16.9291 0.90918C17.225 0.90918 17.5179 0.967448 17.7912 1.08066C18.0645 1.19387 18.3128 1.3598 18.522 1.56898C18.7312 1.77816 18.8971 2.0265 19.0103 2.29981C19.1236 2.57312 19.1818 2.86605 19.1818 3.16188C19.1818 3.45771 19.1236 3.75064 19.0103 4.02395C18.8971 4.29726 18.7312 4.5456 18.522 4.75478L5.24786 18.029L1.00012 19.0909L2.06206 14.8432L15.3362 1.56898Z"
                fill={color}
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default EditIcon;
