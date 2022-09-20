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
                Thêm món ăn
            </Title>
            <Form className="add-dish__form" layout="vertical">
                <Row gutter={[24, 0]}>
                    <Col xs={24} lg={13}>
                        <Row gutter={[18, 0]}>
                            <Col span={12}>
                                <div className="add-dish__form-left">
                                    <Form.Item label="Tên món ăn">
                                        <input
                                            type="text"
                                            className="add-dish__form__input add-dish__form__input-name"
                                            placeholder="Nhập tên của món"
                                        />
                                    </Form.Item>
                                    <Form.Item label="Danh mục">
                                        <SelectBox />
                                    </Form.Item>
                                    <Form.Item label="Giá">
                                        <input
                                            type="number"
                                            className="add-dish__form__input add-dish__form__input-price"
                                            placeholder="Nhập giá của món"
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="add-dish__form-right">
                                    <Form.Item label="Trạng thái" style={{ marginBottom: '20px' }}>
                                        <Radio status={'Còn món'} checked={true} />
                                        <Radio status={'Hết món'} />
                                    </Form.Item>
                                    <Form.Item label="Định lượng">
                                        <input
                                            type="text"
                                            className="add-dish__form__input add-dish__form__input-quantitative"
                                            placeholder="Nhập định lượng của món"
                                        />
                                    </Form.Item>
                                    <Form.Item label="Giảm giá">
                                        <input
                                            type="number"
                                            className="add-dish__form__input add-dish__form__input-discount"
                                            placeholder="Nhập số tiền giảm"
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Mô tả">
                                    <textarea
                                        className="add-dish__form-area"
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

export default formAddDish;
