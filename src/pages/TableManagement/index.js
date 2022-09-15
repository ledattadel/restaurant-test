import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

//import assets
import './index.scss';
import { Col, Row } from 'antd';

const TableManagement = () => {
    return <div className="table-page">
        <Row style={{width: '100%'}}>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
        </Row>
    </div>;
};

export default TableManagement;
