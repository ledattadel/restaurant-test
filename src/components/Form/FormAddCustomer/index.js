import { Button, DatePicker, Form, Typography } from 'antd';
import React from 'react';
const { Title } = Typography;

const FormAddCustomer = React.forwardRef((props, ref) => {
    const { visible, setVisible } = props;
    const onFinish = (values) => {};
    const onFinishFailed = (errorInfo) => {};
    return (
        <div className="add-customer">
            <Title level={3} className="add-customer__title">
                Thêm khách hàng
            </Title>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="add-category__form" layout="vertical">
                <Form.Item
                    label="Họ và tên"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên khách hàng!' }]}
                >
                    <input
                        type="text"
                        className="add-customer__form__input add-customer__form__input-name"
                        placeholder="Nhập họ và tên của khách hàng"
                    />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[{ required: true, message: 'Vui lòng nhập số diện thoại!' }]}
                >
                    <input
                        type="text"
                        className="add-customer__form__input add-customer__form__input-phone"
                        placeholder="Nhập số điện thoại"
                    />
                </Form.Item>
                <Form.Item
                    label="Ngày sinh"
                    name="birthday"
                    rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}
                >
                    <DatePicker className="add-customer__form__input" format={'MM/DD/YYYY'} placeholder="mm/dd/yyyy" />
                </Form.Item>

                <div className="modal__controll">
                    <Button type="primary" onClick={() => setVisible(false)} className="modal__btn modal__btn-cancel">
                        Hủy
                    </Button>

                    <Button type="primary" htmlType="submit" className="modal__btn modal__btn-save">
                        Lưu
                    </Button>
                </div>
            </Form>
        </div>
    );
});

export default FormAddCustomer;
