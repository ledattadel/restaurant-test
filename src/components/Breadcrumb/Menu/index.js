import * as React from 'react';
import Sort from '@/components/Button/Sort';
import DefaultModal from '@/components/Modal';
import { Button } from 'antd';
import { BsPlusCircle } from 'react-icons/bs';

const BreadcrumbMenu = ({ address, button }) => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => {
        setVisible(true);
    };

    return (
        <div className="breadcrumb__menu">
            <Button className="breadcrumb__menu__btn breadcrumb__menu__btn-add" onClick={() => showModal()}>
                <BsPlusCircle />
                <p>{button}</p>
            </Button>
            {address && address === '/dish' && <Sort />}
            <DefaultModal visible={visible} setVisible={setVisible} />
        </div>
    );
};

export default BreadcrumbMenu;
