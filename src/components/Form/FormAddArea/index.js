import React from 'react';
import { Col, Form, Row, Typography } from 'antd';
import Dragger from '@/components/Dragger';
import Radio from '@/components/Button/Radio';
import SelectBox from '@/components/SelectBox';
const { Title } = Typography;

const formAddDish = () => {
    return (
        <div className="add-dish">
            <Title level={3} className="add-dish__title">
                Tạo khu vực bàn
            </Title>
            <Form className="add-dish__form" layout="vertical">
                <Row gutter={[24, 0]}>
                    <Col span={24}>
                        <Row gutter={[12, 0]}>
                            <Col span={12}>
                                <div className="add-dish__form-left">
                                    <Form.Item label="Tên khu vực">
                                        <input
                                            className="add-dish__form__input add-dish__form__input-name"
                                            placeholder="Nhập tên khu vực"
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="add-dish__form-right">
                                    <Form.Item label="Trạng thái" style={{ marginBottom: '20px' }}>
                                        <Radio status={'Đang mở'} checked={true}/>
                                        <Radio status={'Tạm đóng'} />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Mô tả">
                                    <textarea
                                        className="add-dish__form-area"
                                        placeholder="Nhập thông tin mô tả "
                                        rows="4"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default formAddDish;
