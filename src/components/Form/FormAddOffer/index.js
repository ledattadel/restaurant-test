import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const App = ({ childFunc }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    React.useEffect(() => {
        childFunc.current = showModal;
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Modal title="NEW OFFER" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default App;
