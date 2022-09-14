import React from 'react';
import { Col, Row, Typography } from 'antd';
import Dragger from '@/components/Dragger';
const { Title } = Typography;

const formAddDish = () => {
    return (
        <div className="add-dish">
            <Title className="add-dish__title">Thêm món ăn</Title>
            <form className="add-dish__form">
                <Row>
                    <Col span={13}>
                        <Row gutter={[18, 0]}>
                            <Col span={12}>
                                <div className="add-dish__form-left">
                                    <p>Tên món ăn</p>
                                    <input className='add-dish__form-left__input-name'>

                                    </input>
                                    <p>Danh mục</p>
                                    
                                    <p>Giá</p>
                                    <input className='add-dish__form-left__input-price'>

                                    </input>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="add-dish__form-right">
                                    <p>Trạng thái</p>
                                    <input></input>
                                    <p>Định lượng</p>
                                    <input></input>
                                    <p>nhập số tiền giảm</p>
                                    <input></input>

                                </div>
                            </Col>
                            <Col span={24}><div className="add-dish__form-area"></div></Col>
                        </Row>
                    </Col>
                    <Col span={11}>
                        <Dragger/>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default formAddDish;
