import React from 'react';
import * as TableIcon from '@/assets/table-icon';
import { useNavigate } from 'react-router-dom';

const AreaCard = ({ name, sum, status, id }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
        navigate('/area/table');
    };
    return (
        <div onClick={handleClick} className="table_area">
            <div className="table_area--head">
                <span className="table_area--name">{name}</span>
                <div className="table_area--head-handing">
                    <TableIcon.EditIcon color={'#F78B2D'}/>
                    <TableIcon.DeleteIcon/>
                </div>
            </div>

            <div className="table_area--info">
                <span className="table_area_info--sum">Tổng bàn: {sum}</span>
                <span className="table_area_info--id">Mã ID: {id}</span>
            </div>

            <span className="table_area--stt">
                Trạng thái: <span className="table_area--stt-2">{status}</span>
            </span>
        </div>
    );
};

export default AreaCard;
