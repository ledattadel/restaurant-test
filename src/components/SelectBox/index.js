import React from 'react';
import { Avatar } from 'antd';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const SelectBox = ({ menu, setCate }) => {
    const [select, setSelect] = React.useState('Chọn tên danh mục');
    const [toggle, setToggle] = React.useState(false);
    const [choose, setChoose] = React.useState(false);

    const array = [
        {
            src: 'https://joeschmoe.io/api/v1/random',
            name: 0,
        },
        {
            src: 'https://joeschmoe.io/api/v1/random',
            name: 1,
        },
        {
            src: 'https://joeschmoe.io/api/v1/random',
            name: 2,
        },
        {
            src: 'https://joeschmoe.io/api/v1/random',
            name: 3,
        },
    ];

    return (
        <div className="selector">
            <div id="selectField" onClick={() => setToggle(!toggle)}>
                <p style={choose ? {} : { color: '#9C9CAC' }} id="selectText">
                    {select}
                </p>
                {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <ul id="list" className={toggle ? '' : 'hide'}>
                {menu &&
                    menu.map((item) => (
                        <li
                            key={item.id}
                            className="options"
                            onClick={() => {
                                setSelect(item.name);
                                setChoose(true);
                                setToggle(false);
                                setCate(item.id);
                            }}
                        >
                            <Avatar
                                size={18}
                                src={`https://api-fnb.pvssolution.com/fnb-api/api/media/menu/${item.image}`}
                            />
                            <p>{item.name}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default SelectBox;
