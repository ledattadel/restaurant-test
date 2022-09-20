import React from 'react';
import ProductCard from '@/components/ProductCard';
import './index.scss';
import { Col, Row } from 'antd';
import TableCard from '@/components/TableCard';
import { PermPhoneMsg } from '@mui/icons-material';

const Table = () => {
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
                <TableCard name="Ngoài trời 1" status="Đang mở" id="122" />
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

export default Table;
