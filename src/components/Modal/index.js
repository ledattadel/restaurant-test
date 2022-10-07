import * as React from 'react';
import { Form, Modal } from 'antd';
import { useLocation } from 'react-router-dom';
import {
    FormAddAccount,
    FormAddArea,
    FormAddCategory,
    FormAddCustomer,
    FormAddDish,
    FormAddPromotion,
    FormEditProfile,
    FormAddTable,
} from '@/components';
import constants from '@/constants';

const DefaultModal = ({ visible, setVisible, userProfile }) => {
    const location = useLocation();

    const labelForm = constants?.breadcrumb?.find((v) => v.key === location.pathname)
        ? constants?.breadcrumb?.find((v) => v.key === location.pathname)
        : '';

    const [form] = Form.useForm();

    const handleSubmitDish = (values) => {
        console.log(values);
        form.resetFields();
        setVisible(false);
    };
    const handleSubmitCategory = (values) => {
        form.resetFields();
        setVisible(false);
    };

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setVisible(false);
        form.resetFields();
    };
    const switchWidthForm = (route) => {
        switch (route) {
            case '/dish':
                return window.innerWidth / 1.7;
            case '/area':
                return window.innerWidth / 2.5;
            case '/category':
                return window.innerWidth / 2;
            case '/customer':
                return window.innerWidth / 2.5;
            case '/promotion':
                return window.innerWidth / 2.5;
            case '/account':
                return window.innerWidth / 2.5;
            case '/area/table':
                return window.innerWidth / 2.3;
            default:
                return '300px';
        }
    };

    const switchForm = (route) => {
        switch (route) {
            case '/area':
                return <FormAddArea visible={visible} setVisible={setVisible} />;
            case '/account':
                return <FormAddAccount visible={visible} setVisible={setVisible} />;
            case '/category':
                return <FormAddCategory visible={visible} setVisible={setVisible} />;
            case '/customer':
                return <FormAddCustomer visible={visible} setVisible={setVisible} />;
            case '/dish':
                return <FormAddDish visible={visible} setVisible={setVisible} />;
            case '/promotion':
                return <FormAddPromotion visible={visible} setVisible={setVisible} />;
            case '/area/table':
                return <FormAddTable visible={visible} setVisible={setVisible} />;
            default:
                return <></>;
        }
    };

    return (
        <Modal
            centered
            closable={false}
            visible={visible}
            className="modal"
            // width={`${switchWidthForm(labelForm.key)}`}
            // onCancel={handleCancel}
            // onOk={form.submit}
            footer={null}
            width={userProfile ? window.innerWidth / 2.5 : switchWidthForm(labelForm.key)}
            // footer={[
            //     <Button type="primary" className="modal__btn modal__btn-cancel" onClick={handleCancel}>
            //         Hủy
            //     </Button>,
            //     <Button type="primary" className="modal__btn modal__btn-save" onClick={handleOk}>
            //         Lưu
            //     </Button>,
            // ]}
        >
            {userProfile ? (
                <FormEditProfile visible={visible} setVisible={setVisible} />
            ) : labelForm ? (
                switchForm(labelForm.key)
            ) : (
                <></>
            )}
        </Modal>
    );
};

export default DefaultModal;
