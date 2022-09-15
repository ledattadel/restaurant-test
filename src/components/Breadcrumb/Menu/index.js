import { Button, Dropdown, Menu } from 'antd';
import React from 'react'
import { BsPlusCircle, BsSortDown } from 'react-icons/bs';
import DefaultModal from '@/components/Modal';

const BreadcrumbMenu = () => {
    const [trigger, setTrigger] = React.useState(false);

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

    return (
        <div className="breadcrumb__menu">
        <Button className= "breadcrumb__menu__btn breadcrumb__menu__btn-add" onClick={()=>setTrigger(true)}>
            <BsPlusCircle />
            <p>Tạo món mới</p>
        </Button>
        <Dropdown overlay={menu} placement="bottom">
            <Button className="breadcrumb__menu__btn breadcrumb__menu__btn-sort" >
                <BsSortDown />
                <p>Lọc theo</p>
            </Button>
        </Dropdown>
        <DefaultModal trigger={trigger} handleTrigger={()=>setTrigger(false)}/>
    </div>
    )
};

export default BreadcrumbMenu;