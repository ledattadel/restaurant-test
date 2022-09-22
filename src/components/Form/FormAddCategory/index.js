import React from 'react';
import { Col, Form, Row, Typography } from 'antd';
import { Dragger, SelectBox, Radio } from '@/components';

const { Title } = Typography;

const FormAddCategory = () => {
    return (
        <div className="add-category">
            <Title level={3} className="add-category__title">
                Thêm danh mục
            </Title>
            <Form className="add-category__form" layout="vertical">
                <Row gutter={[24, 0]}>
                    <Col xs={24} lg={13}>
                        <Row gutter={[18, 0]}>
                            <Col span={24}>
                                <Form.Item label="Tên danh mục">
                                    <input
                                        type="text"
                                        className="add-category__form__input add-category__form__input-name"
                                        placeholder="Nhập tên của danh mục"
                                    />
                                    <span></span>
                                </Form.Item>
                                <Form.Item label="Mô tả">
                                    <textarea
                                        className="add-category__form-area"
                                        placeholder="Nhập thông tin mô tả món ăn"
                                        rows="4"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} lg={11}>
                        <Dragger />
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default FormAddCategory;
