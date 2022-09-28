import React from 'react';
import * as TableIcon from '@/assets/table-icon';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const AreaCard = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(product);
        navigate(`/area/table/${product.id}`);
    };
    return (
        <div onClick={handleClick} className="table_area">
            <div className="table_area--head">
                <span className="table_area--name">{product.name}</span>
                <div className="table_area--head-handing">
                    <TableIcon.EditIcon color={'#F78B2D'} />
                    <TableIcon.DeleteIcon />
                </div>
            </div>

            <div className="table_area--info">
                <span className="table_area_info--sum">Tổng bàn: Chưa có</span>
                <span className="table_area_info--id">Mã ID: Chưa có</span>
            </div>

            <span className="table_area--stt">
                Trạng thái: <span className="table_area--stt-2">chưa có</span>
            </span>
        </div>
    );
};

export default AreaCard;
