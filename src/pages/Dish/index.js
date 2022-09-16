import React from 'react';
import { Col, Row } from 'antd';
import ProductCard from '@/components/ProductCard';
import './index.scss';
const data = {
    image: 'https://suamaytinhtphcm.net/wp-content/uploads/2019/08/hinh-nen-cho-man-hinh-dien-thoai-dai-quantrimangcom-10.jpg',
    name: 'Gà nướng mật ong',
    price: '95.000',
    discount: '120.000',
    saleNumber: 24,
    status: 'Còn món',
    description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
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
        <div>
            <div className="control-dish">
                <div className="btn-createDish">Tạo món mới</div>
            </div>
            <Row justify="space-around" align="middle" gutter={[window.innerWidth / 120, window.innerWidth / 120]}>
                {products}
            </Row>
        </div>
    );
};

export default Dish;
