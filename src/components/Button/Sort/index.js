import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import { BsSortDown } from 'react-icons/bs';

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        3rd menu item
                    </a>
                ),
            },
        ]}
    />
);

const Sort = () => {
    return (
        <div>
            <Dropdown overlay={menu} placement="bottom">
                <Button className="btn-sort">
                    <BsSortDown />
                    <p>Lọc theo</p>
                </Button>
            </Dropdown>
        </div>
    );
};

export default Sort;
