import { PercentIcon } from '@/assets/table-icon';
import { Button, DatePicker, Form, Typography, Row, Col } from 'antd';
import React from 'react';
const { Title } = Typography;

const FormAddPromotion = React.forwardRef((props, ref) => {
    const { visible, setVisible } = props;
    const onFinish = (values) => {};
    const onFinishFailed = (errorInfo) => {};
    return (
        <div className="add-promotion">
            <Title level={3} className="add-promotion__title">
                Thêm khuyến mãi
            </Title>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="add-category__form" layout="vertical">
                <Row gutter={[18, 0]}>
                    <Col span={24}>
                        <Form.Item
                            label="Sự kiện"
                            name="event"
                            rules={[{ required: true, message: 'Vui lòng nhập tên sự kiện!' }]}
                        >
                            <input
                                type="text"
                                className="add-promotion__form__input"
                                placeholder="Nhập tên của sự kiện"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Bắt đầu"
                            name="begin"
                            rules={[{ required: true, message: 'Vui lòng nhập ngày bắt dầu sự kiện!' }]}
                        >
                            <DatePicker
                                className="add-promotion__form__input"
                                format={'MM/DD/YYYY'}
                                placeholder="mm/dd/yyyy"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="kết thúc"
                            name="end"
                            rules={[{ required: true, message: 'Vui lòng nhập ngày kết thúc sự kiện!' }]}
                        >
                            <DatePicker
                                className="add-promotion__form__input"
                                format={'MM/DD/YYYY'}
                                placeholder="mm/dd/yyyy"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Giảm giá"
                            name="discount"
                            rules={[{ required: true, message: 'Vui lòng nhập phần trăm giảm giá!' }]}
                        >
                            <input
                                type="number"
                                min={0}
                                max={100}
                                className="add-promotion__form__input add-promotion__form__input-discount"
                                placeholder="Nhập phần trăm giảm giá"
                                defaultValue={0}
                            />
                            <div className="add-promotion__form__icon">
                                <PercentIcon />
                            </div>
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Đơn tối thiểu"
                            name="minimum"
                            rules={[{ required: true, message: 'Vui lòng nhập đơn tối thiểu!' }]}
                        >
                            <input
                                type="number"
                                min={0}
                                className="add-promotion__form__input "
                                placeholder="Nhập đơn tối thiểu"
                                defaultValue={0}
                            />
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

export default FormAddPromotion;
