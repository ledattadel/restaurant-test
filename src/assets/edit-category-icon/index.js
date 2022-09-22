import React from 'react';

const EditCategoryIcon = ({color}) => {
    return (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19.0908H20.5574H11Z" fill={color} />
            <path
                d="M11 19.0908H20.5574"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.7787 1.56886C16.2012 1.14639 16.7741 0.909058 17.3716 0.909058C17.6674 0.909058 17.9604 0.967325 18.2337 1.08053C18.507 1.19374 18.7553 1.35968 18.9645 1.56886C19.1737 1.77804 19.3396 2.02638 19.4528 2.29969C19.566 2.573 19.6243 2.86593 19.6243 3.16176C19.6243 3.45759 19.566 3.75052 19.4528 4.02383C19.3396 4.29714 19.1737 4.54548 18.9645 4.75466L5.69033 18.0288L1.4426 19.0908L2.50453 14.843L15.7787 1.56886Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default EditCategoryIcon;
