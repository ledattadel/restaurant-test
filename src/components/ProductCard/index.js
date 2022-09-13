import React from 'react';
import { Button, Card, Col, Row, Tag } from 'antd';

const ProductCard = ({ product }) => {
    return (
        <Card
            hoverable
            className="product-card"
            cover={<img className="product-card__img" alt="example" src={product.image} />}
        >
            <div className="product-card__info">
                <Row justify="space-between">
                    <Col>
                        <span className="product-card__info__name">{product.name}</span>
                    </Col>
                    <Col>
                        <span className="product-card__info__price">{product.price}</span>
                    </Col>
                </Row>
                <Row className="product-card__info-row" justify="end">
                    <Col>
                        <span className="product-card__info__discount">{product.discount}</span>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col>
                        <span className="product-card__info__sale-number">Da ban: {product.saleNumber}</span>
                    </Col>
                    <Col>
                        <Tag className="product-card__info__status">{product.status}</Tag>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <p className="product-card__info__description">{product.description}</p>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col>
                        <Button className="product-card__info__btn product-card__info__btn-del">Xóa món</Button>
                    </Col>
                    <Col>
                        <Button className="product-card__info__btn product-card__info__btn-edit">Chỉnh sửa</Button>
                    </Col>
                </Row>
            </div>
        </Card>
    );
};
export default ProductCard;
