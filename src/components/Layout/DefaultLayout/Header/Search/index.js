import React from 'react';
import './index.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const Search = () => {
    return (
        <div className="header_search_component">
            <Input
                className="header_search_input"
                placeholder="Tìm kiếm"
                prefix={<SearchOutlined style={{ color: 'rgba(180, 180, 180, 1)', fontSize: '24px' }} />}
            />
        </div>
    );
};
export default Search;
