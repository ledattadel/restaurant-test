import React from 'react';
import { Col, Row } from 'antd';
import ProductCard from '@/components/ProductCard';
import './index.scss';
const data = {
    image: 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    name: 'Gà nướng mật ong',
    price: '95.000',
    discount: '120.000',
    saleNumber: 24,
    status: 'Còn món',
    description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
};

const DishManagement = () => {
    const products = [];
    for (let i = 0; i < 8; i++) {
        products.push(
            <Col
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                xl={{ span: 6 }}
                sm={{ span: 8 }}
                xs={{ span: 24 }}
            >
                <ProductCard product={data} />
            </Col>,
        );
    }
    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <div className="control-dish">
                <div className="btn-createDish">Tạo món mới</div>
            </div>
            <Row justify="space-around" align="middle" gutter={[window.innerWidth / 120, window.innerWidth / 120]}>
                {products}
            </Row>
        </div>
    );
};

export default DishManagement;
