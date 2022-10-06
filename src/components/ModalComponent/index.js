// import { Button, Modal } from 'antd';
// import React, { useState } from 'react';
// import * as ReactRedux from 'react-redux';
// import { forwardRef, useRef, useImperativeHandle } from 'react';

// const App = forwardRef((props, ref) => {
//     const { ComponentProps } = props;
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     useImperativeHandle(ref, () => ({
//         showModal,
//         handleOk,
//         handleCancel,
//     }));

//     const showModal = () => {
//         setIsModalOpen(true);
//         console.log('openmodal');
//     };

//     const handleOk = () => {
//         setIsModalOpen(false);
//     };

//     const handleCancel = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <>
//             <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//                 {/* <ComponentProps></ComponentProps> */}...........
//             </Modal>
//         </>
//     );
// });

// export default App;

import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const App = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { componentForm, visible, setVisible, width, data } = props;

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div onClick={(e) => e.stopPropagation()}>
            <Modal centered closable={false} footer={null} visible={visible} width={width ? width : ''}>
                <div onClick={(e) => e.stopPropagation()}>{componentForm}</div>
            </Modal>
        </div>
    );
};

export default App;
