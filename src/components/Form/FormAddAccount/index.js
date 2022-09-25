import { Button, DatePicker, Form, Typography, Row, Col, Select, Radio } from 'antd';
import React from 'react';

const { Title } = Typography;
const { Option } = Select;

const FormAddAccount = React.forwardRef((props, ref) => {
    const { visible, setVisible } = props;

    const [value, setValue] = React.useState([]);
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
                Thêm khuyến mãi
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
                            <input type="text" className="add-account__form__input " placeholder="Nhập đơn tối thiểu" />
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
                            <Select placeholder="Chọn chức vụ" className="add-account__form__input">
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
                            <Radio.Group >
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
                            label="Vị trí"
                            name="positionY"
                            rules={[{ required: true, message: 'Vui lòng chọn vị Trí!' }]}
                        >
                            <Select placeholder="Chọn vị Trí" className="add-account__form__input">
                                <Option value="Quản lý">Quản lý</Option>
                                <Option value="Thu ngân">Thu ngân</Option>
                                <Option value="Phục vụ">Phục vụ</Option>
                                <Option value="Đầu bếp">Đầu bếp</Option>
                            </Select>
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

export default FormAddAccount;
