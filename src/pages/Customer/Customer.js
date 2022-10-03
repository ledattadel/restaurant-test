import React from 'react';
import { Col, Row } from 'antd';
import { Search, SizeChanger } from '@/components';
import * as TableIcon from '@/assets/table-icon';
import Table from '@/components/Table/Table';
import moment from 'moment';

const column = [
    { heading: 'STT', value: 'stt' },
    { heading: 'ID', value: 'id' },
    { heading: 'Họ và tên', value: 'name' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'Ngày sinh', value: 'birthday' },
];
const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        stt: i,
        id: i,
        name: `James Moriarty ${i}`,
        phone: `037834493${i}`,
        birthday: moment('8-10-2019').format('L'),
    });
}

const Customer = () => {
    return (
        <div className="data-table">
            <Row className="data-table__header">
                <Col xs={24} lg={12} className="data-table__header__title">
                    <p>Danh sách khách hàng</p>
                </Col>
                <Col xs={24} lg={12} className="data-table__header__filter">
                    <Search />
                    <SizeChanger />
                </Col>
            </Row>
            <Table data={data} column={column} />
        </div>
    );
};

export default Customer;
