import { Button, DatePicker, Form, Typography } from 'antd';
import actions from '@/redux/actions/customer';
import * as Redux from 'react-redux';
import React from 'react';

const { Title } = Typography;

const FormEditCustomer = React.forwardRef((props, ref) => {
    const dispatch = Redux.useDispatch();

    const { setVisible } = props;
    const [fullName, setFullName] = React.useState('');
    const [birthday, setBirthday] = React.useState(new Date());
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const onFinish = async () => {
        await dispatch(
            actions.createCustomer({
                fullName,
                birthday,
                phoneNumber,
            }),
        );
        setVisible(false);
    };

    return (
        <div className="add-customer">
            <Title level={3} className="add-customer__title">
                Thêm khách hàng
            </Title>
            <Form onFinish={onFinish} className="add-category__form" layout="vertical">
                <Form.Item
                    label="Họ và tên"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên khách hàng!' }]}
                >
                    <input
                        type="text"
                        className="add-customer__form__input add-customer__form__input-name"
                        placeholder="Nhập họ và tên của khách hàng"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Ngày sinh"
                    name="birthday"
                    rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}
                >
                    <DatePicker
                        className="add-customer__form__input"
                        format={'MM/DD/YYYY'}
                        placeholder="mm/dd/yyyy"
                        value={birthday}
                        onChange={(date, dateString) => {
                            setBirthday(date);
                        }}
                    />
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

export default FormEditCustomer;
