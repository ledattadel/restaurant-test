import * as React from 'react';

// import antd
import { Tabs, Button, Modal, Form, Input, InputNumber, Checkbox } from 'antd';
import { SearchOutlined, RedoOutlined, CloseOutlined } from '@ant-design/icons';

//import assets
import './AddAreaForm.components.scss';

const { TabPane } = Tabs;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const AddAreaForm = ({ childRef, handleSubmitForm }) => {
    React.useEffect(() => {
        childRef.current = showModal;
    }, []);

    const onChange = (key) => {
        console.log(key);
    };
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        // console.log(values);
        handleSubmitForm(values);
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

    return (
        <Modal
            title="Thêm khu vực"
            visible={isModalVisible}
            footer={[
                <Button
                    form="AddAreaForm"
                    key="submit"
                    htmlType="submit"
                    onClick={() => {
                        handleSaveArea(1);
                    }}
                >
                    Lưu & thêm
                </Button>,
                <Button
                    form="AddAreaForm"
                    key="submit"
                    htmlType="submit"
                    onClick={() => {
                        handleSaveArea(2);
                    }}
                    type="primary"
                >
                    Lưu & thoát
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
            <Form
                id="AddAreaForm"
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="Thông tin chung" key="1">
                        <Form.Item
                            name="makv"
                            label="Mã khu vực"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="tenkv"
                            label="Tên khu vực"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="mota" label="Mô tả">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item name="sudung" label="Sử dụng" valuePropName="checked">
                            <Checkbox></Checkbox>
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="Gía trị mặc định" key="2"></TabPane>
                </Tabs>
            </Form>
        </Modal>
    );
};

export default AddAreaForm;
