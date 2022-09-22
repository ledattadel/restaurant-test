import React from 'react';
import { Col, Row } from 'antd';
import { CategoryCard } from '@/components';

const data = {
    image: 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
    name: 'Món nướng',
    ID: 24,
};

const Category = () => {
    const categories = [];
    for (let i = 0; i < 6; i++) {
        categories.push(
            <Col key={i} className="grid__col" xxl={{ span: 4 }} xl={{ span: 6 }} sm={{ span: 8 }} xs={{ span: 24 }}>
                <CategoryCard category={data} />
            </Col>,
        );
    }
    return (
        <div className="category">
            <Row gutter={[window.innerWidth / 60, window.innerWidth / 60]}>{categories}</Row>
        </div>
    );
};

export default Category;
