import React from 'react';
import './index.scss';
import { Select } from 'antd';
const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const ChangeLanguague = () => {
    return (
        <div className="header_changelanguage">
            <Select
                defaultValue="lucy"
                style={{
                    width: 47,
                }}
                onChange={handleChange}
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </div>
    );
};
export default ChangeLanguague;
