import React from 'react';
import { Col, Row } from 'antd';
import { ProductCard } from '@/components';
const data = {
    image: 'https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    name: 'Gà nướng mật ong',
    price: 6900000,
    discount: 120000,
    saleNumber: 24,
    status: 'Còn món',
    description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
};

const Dish = () => {
    const products = [];
    for (let i = 0; i < 12; i++) {
        products.push(
            <Col key={i} className="grid__col" xxl={{ span: 4 }} xl={{ span: 6 }} sm={{ span: 8 }} xs={{ span: 24 }}>
                <ProductCard product={data} />
            </Col>,
        );
    }
    return (
        <div className="dish">
            <Row gutter={[window.innerWidth / 60, window.innerWidth / 60]}>{products}</Row>
        </div>
    );
};

export default Dish;
