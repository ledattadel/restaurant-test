import React, { useState } from 'react';

import { SearchOutlined, RedoOutlined, CloseOutlined } from '@ant-design/icons';
import { Tabs, Button, Modal, Form, Input, InputNumber, Checkbox } from 'antd';

const TableChoiceComponents = ({ childRef, dataEditTable }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    React.useEffect(() => {
        if (dataEditTable) {
            childRef.current = showModal;
        }
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
    const handleSaveArea = (number) => {
        if (number == 1) {
        } else if (number == 2) {
            setIsModalVisible(false);
        } else if (number == 3) {
        } else if (number == 4) {
            setIsModalVisible(false);
        }
    };

    const onFinish = (values) => {
        // console.log(values);
    };
    return (
        <>
            <Modal
                title="Update table"
                visible={isModalVisible}
                footer={[
                    <Button
                        form="editTable"
                        key="submit"
                        htmlType="submit"
                        onClick={() => {
                            handleSaveArea(2);
                        }}
                        type="primary"
                    >
                        Lưu & đóng
                    </Button>,
                    <Button
                        onClick={() => {
                            handleSaveArea(3);
                        }}
                        key="3"
                        icon={<RedoOutlined />}
                    >
                        Làm mới
                    </Button>,
                    <Button
                        onClick={() => {
                            handleSaveArea(4);
                        }}
                        key="4"
                        icon={<CloseOutlined />}
                        danger
                        type="primary"
                    >
                        Thoát
                    </Button>,
                ]}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form id="editTable" name="nest-messages" onFinish={onFinish}>
                    <Form.Item name="makv" label="Mã bàn">
                        <Input disabled defaultValue={dataEditTable.areaTable} />
                    </Form.Item>
                    <Form.Item name="tenkv" label="Tên bàn">
                        <Input defaultValue={dataEditTable.Table} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default TableChoiceComponents;
