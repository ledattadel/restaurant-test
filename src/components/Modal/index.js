import * as React from 'react';
import { Button, Modal } from 'antd';
import { useLocation } from 'react-router-dom';
import constants from '@/constants';
import { Form } from 'antd';
import * as DishAction from '@/redux/actions/dishAction';
import FormAddArea from '@/components/Form/FormAddArea';
import FormAddDish from '@/components/Form/FormAddDish';
import FormAddCategory from '@/components/Form/FormAddCategory';
import * as ReactRedux from 'react-redux';

const DefaultModal = ({ visible, setVisible }) => {
    const location = useLocation();
    const addDishRef = React.useRef(null);
    const addCateRef = React.useRef(null);
    const dispatch = ReactRedux.useDispatch();
    // dish

    const labelForm = constants.breadcrumb.find((v) => v.key === location.pathname);
    const [form] = Form.useForm();

    const handleSubmitDish = async (values) => {
        addDishRef.current.addDish(values);
        form.resetFields();
        setVisible(false);
    };
    const handleSubmitCategory = async (values) => {
        addCateRef.current.addCate(values);
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
            default:
                return '300px';
        }
    };

    const switchForm = (route) => {
        switch (route) {
            case '/dish':
                return <FormAddDish form={form} onFinish={handleSubmitDish} ref={addDishRef} />;
            case '/area':
                return <FormAddArea />;
            case '/category':
                return <FormAddCategory form={form} onFinish={handleSubmitCategory} ref={addCateRef} />;
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
            onCancel={handleCancel}
            onOk={form.submit}
            width={switchWidthForm(labelForm.key)}
            footer={[
                <Button type="primary" className="modal__btn modal__btn-cancel" onClick={handleCancel}>
                    Hủy
                </Button>,
                <Button type="primary" className="modal__btn modal__btn-save" onClick={handleOk}>
                    Lưu
                </Button>,
            ]}
        >
            {labelForm.label.length > 0 ? switchForm(labelForm.key) : <></>}
        </Modal>
    );
};

export default DefaultModal;
