import React from 'react';
import ProductCard from '@/components/Card/Product';
import './index.scss';
import { Col, Row } from 'antd';
import AreaCard from '@/components/Card/Area';
import { PermPhoneMsg } from '@mui/icons-material';

const AreaManagement = () => {
    const products = [];
    for (let i = 0; i < 12; i++) {
        products.push(
            <Col
                key={i}
                span={6}
                className="grid__col"
                xxl={{ span: 4 }}
                xl={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
            >
                <AreaCard name="Ngoài trời" sum={12} status="Đang mở" id="12" />
            </Col>,
        );
    }

    return (
        <div>
            <Row justify="space-between" align="middle" gutter={[12, 16]}>
                {products}
            </Row>
        </div>
    );
};

export default AreaManagement;
