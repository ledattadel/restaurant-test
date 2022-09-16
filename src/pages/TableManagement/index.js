import React from 'react';
import { Col, Row } from 'antd';
import ProductCard from '@/components/ProductCard';
import './index.scss';
import { Col, Row } from 'antd';
import TableCard from '@/components/TableCard';
import { PermPhoneMsg } from '@mui/icons-material';
const TableManagement = () => {
    return (
        <div className="table-page">
            <Row style={{ width: '100%' }}>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
            </Row>
        </div>
    );
};

export default TableManagement;
