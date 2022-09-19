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
                        <span className="product-card__info__name">
                            {product.name.length > 16 ? (
                                <p>{product.name.substring(0, 16)} ...</p>
                            ) : (
                                <p>{product.name}</p>
                            )}
                        </span>
                    </Col>
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'end',
                            justifyContent: 'end',
                            // width: '100%',
                        }}
                    >
                        <span className="product-card__info__price">
                            {product.price.length > 6 ? (
                                <p>
                                    {product.price.substring(0, 5).toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </p>
                            ) : (
                                <p>
                                    {product.price.toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </p>
                            )}
                        </span>
                        <span className="product-card__info__discount">
                            {product.discount.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                    </Col>
                </Row>
                <Row className="product-card__info-row" justify="end">
                    <Col></Col>
                </Row>
                <Row justify="space-between">
                    <Col>
                        <span className="product-card__info__sale-number">Đã bán: {product.saleNumber}</span>
                    </Col>
                    <Col>
                        <Tag className="product-card__info__status">{product.status}</Tag>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <p className="product-card__info__description">
                            {product.description.length > 120 ? (
                                <>{product.description.substring(0, 120)} ...</>
                            ) : (
                                <>{product.description}</>
                            )}
                        </p>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col className="space-btn">
                        <Button className="product-card__info__btn product-card__info__btn-del">Xóa món</Button>
                    </Col>
                    <Col className="space-btn">
                        <Button className="product-card__info__btn product-card__info__btn-edit">Chỉnh sửa</Button>
                    </Col>
                </Row>
            </div>
        </Card>
    );
};
export default ProductCard;
