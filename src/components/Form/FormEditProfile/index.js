import { Button, DatePicker, Form, Typography, Row, Col, Select, Radio } from 'antd';
import { EyeOpen, EyeClosed } from 'akar-icons';
import React from 'react';

const { Title } = Typography;
const { Option } = Select;

const FormEditProfile = React.forwardRef((props, ref) => {
    const { visible, setVisible } = props;
    const [value, setValue] = React.useState([]);
    const [typePass, setTypePass] = React.useState(false);

    const selectProps = {
        mode: 'multiple',
        value,
        onChange: (newValue) => {
            setValue(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };
    const onFinish = (values) => {};
    const onFinishFailed = (errorInfo) => {};

    return (
        <div className="add-account">
            <Title level={3} className="add-account__title">
                Thông tin nhân viên
            </Title>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="add-category__form" layout="vertical">
                <Row gutter={[18, 0]}>
                    <Col span={24}>
                        <Form.Item
                            label="Họ và tên"
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
                        >
                            <input
                                type="text"
                                className="add-account__form__input"
                                placeholder="Nhập tên của nhân viên"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col span={24}>
                        <Form.Item
                            label="Địa chỉ"
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                        >
                            <input type="text" className="add-account__form__input" placeholder="Nhập địa chỉ" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Số CMND"
                            name="identityCard"
                            rules={[{ required: true, message: 'Vui lòng nhập số CMND!' }]}
                        >
                            <input type="text" className="add-account__form__input" placeholder="Nhập số CMND" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                        >
                            <input type="text" className="add-account__form__input " placeholder="Nhập số điện thoại" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Chức vụ"
                            name="positionX"
                            rules={[{ required: true, message: 'Vui lòng chọn chức vụ!' }]}
                        >
                            <Select placeholder="Chọn chức vụ">
                                <Option value="Quản lý">Quản lý</Option>
                                <Option value="Thu ngân">Thu ngân</Option>
                                <Option value="Phục vụ">Phục vụ</Option>
                                <Option value="Đầu bếp">Đầu bếp</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Trạng thái"
                            style={{ marginBottom: '20px' }}
                            name="statusCode"
                            rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
                        >
                            <Radio.Group>
                                <Radio value="Đang làm">Đang làm</Radio>
                                <Radio value="Đã nghỉ">Đã nghỉ</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Thời gian làm"
                            name="timeStart"
                            rules={[{ required: true, message: 'Vui lòng nhập ngày bắt dầu!' }]}
                        >
                            <DatePicker
                                className="add-account__form__input"
                                format={'MM/DD/YYYY'}
                                placeholder="mm/dd/yyyy"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                        >
                            <div className="pass">
                                <input
                                    name="password"
                                    type={typePass ? 'text' : 'password'}
                                    className="add-promotion__form__input add-promotion__form__input-discount"
                                    placeholder="Mật khẩu"
                                />

                                <div
                                    className="icon-showPassword"
                                    onClick={() => {
                                        setTypePass(!typePass);
                                    }}
                                >
                                    {typePass ? (
                                        <EyeOpen className="add-promotion__form__icon" style={{ color: 'F78B2D' }} />
                                    ) : (
                                        <EyeClosed className="add-promotion__form__icon" style={{ color: 'A3A3A3' }} />
                                    )}
                                </div>
                            </div>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col span={24}>
                        <Form.Item
                            label="Phân quyền"
                            name="role"
                            rules={[{ required: true, message: 'Vui lòng chọn lựa phân quyền!' }]}
                        >
                            <Select {...selectProps}>
                                <Option value="Quản lý">Quản lý</Option>
                                <Option value="Thu ngân">Thu ngân</Option>
                                <Option value="Phục vụ">Phục vụ</Option>
                                <Option value="Đầu bếp">Đầu bếp</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

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

export default FormEditProfile;
