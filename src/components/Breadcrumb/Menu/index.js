import React from 'react'
import Sort from '@/components/Button/Sort';
import DefaultModal from '@/components/Modal';
import { Button } from 'antd';
import { BsPlusCircle } from 'react-icons/bs';

const BreadcrumbMenu = ({ address, btn }) => {
    const [trigger, setTrigger] = React.useState(false);

    return (
        <div className="breadcrumb__menu">
        <Button className= "breadcrumb__menu__btn breadcrumb__menu__btn-add" onClick={()=>setTrigger(true)}>
            <BsPlusCircle />
            <p>{btn}</p>
        </Button>
        { address && address === '/dish' && 
            <Sort />
        }
        <DefaultModal trigger={trigger} handleTrigger={()=>setTrigger(false)}/>
    </div>
    )
};

export default BreadcrumbMenu;