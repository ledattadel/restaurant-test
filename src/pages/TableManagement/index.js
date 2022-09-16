import React from 'react';
import { Col, Row } from 'antd';
import ProductCard from '@/components/ProductCard';
import './index.scss';
import TableCard from '@/components/TableCard';
import { PermPhoneMsg } from '@mui/icons-material';
const TableManagement = () => {
    const products = [];
    for (let i = 0; i < 12; i++) {
        products.push(
            <Col
                key={i}
                span={6}
                className="grid__col"
                xxl={{ span: 4.5 }}
                xl={{ span: 6 }}
                sm={{ span: 8 }}
                xs={{ span: 24 }}
            >
                <TableCard name={'Ngoài trời'} sum={15} status={'Đang mở'} id={122} />
            </Col>,
        );
    }
    const handleAreaTable = () => {};
    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            {/* <div className="control-dish">
                <div className="btn-createDish">Tạo món mới</div>
            </div> */}
            <Row justify="space-around" align="middle" gutter={[window.innerWidth / 120, window.innerWidth / 120]}>
                {products}
            </Row>
        </div>
    );
};

export default TableManagement;
