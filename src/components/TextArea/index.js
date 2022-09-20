import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

const DefaultTextArea = (props) => {
    const [focused, setFocused] = React.useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formArea">
            <textarea
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};
export default DefaultTextArea;
