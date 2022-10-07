import React from 'react';
import * as TableIcon from '@/assets/table-icon';
import { VscTriangleRight, VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import moment from 'moment';
import ModalComponent from '@/components/ModalComponent';
import FormEditAccount from '@/components/Form/FormEditAccount';
import { Button, message, Popconfirm, Tooltip, Modal } from 'antd';
import actions from '@/redux/actions/account';
import * as ReactRedux from 'react-redux';

const text = 'Bạn muốn xóa nhân viên này?';

const Table = ({ data, column, sortOrder, setSortOrder }) => {
    console.log('data co chua', data);
    return (
        <table className="new-table">
            <thead className="new-table__head">
                <tr className="new-table__head__row">
                    {column.map((item, index) => (
                        <TableHeadItem key={index} item={item} sortOrder={sortOrder} setSortOrder={setSortOrder} />
                    ))}
                    <th className="new-table__head__row__col-active-2">Thao tác</th>
                </tr>
            </thead>
            <tbody className="new-table__body">
                {data.map((item) => (
                    <TableRow key={item.id} item={item} column={column} />
                ))}
            </tbody>
        </table>
    );
};

const TableHeadItem = ({ item, sortOrder, setSortOrder }) => {
    const changeSort = () => {
        if (sortOrder === '') {
            console.log('null');
            setSortOrder('DESC');
        } else if (sortOrder === 'DESC') {
            console.log('DESC');
            setSortOrder('ASC');
        } else if (sortOrder === 'ASC') {
            console.log('ASC');
            setSortOrder('');
        }
    };

    return (
        <th className={`new-table__head__row__col-${item.value}`}>
            {item.value === 'fullName' ? (
                <>
                    <p>{item.heading}</p>
                    <button className={`new-table__head__row__col-${item.value}__button`} onClick={() => changeSort()}>
                        {sortOrder === 'ASC' ? (
                            <VscTriangleUp />
                        ) : sortOrder === 'DESC' ? (
                            <VscTriangleDown />
                        ) : (
                            <VscTriangleRight />
                        )}
                    </button>
                </>
            ) : (
                <p>{item.heading}</p>
            )}
        </th>
    );
};

const TableRow = ({ item, column }) => {
    const dispatch = ReactRedux.useDispatch();
    const [visible, setVisible] = React.useState(false);
    const confirm = () => {
        dispatch(actions.deleteUser(item.id));
    };

    return (
        <tr className="new-table__body__row">
            {column.map((columnItem, index) => {
                if (columnItem.value.includes('.')) {
                    const itemSplit = columnItem.value.split('.'); //['address', 'city']

                    return (
                        <td className={`new-table__body__row__col-${columnItem.value}`} key={index}>
                            <p>{item[itemSplit[0]][itemSplit[1]]}</p>
                        </td>
                    );
                }
                if (columnItem.value === 'fullName') {
                    return (
                        <td className={`new-table__body__row__col-${columnItem.value}`} key={index}>
                            <TableIcon.CacbonUserIcon />
                            <p>{item[`${columnItem.value}`]}</p>
                        </td>
                    );
                } else if (columnItem.value === 'birthday' || columnItem.value === 'timeStart') {
                    return (
                        <td className={`new-table__body__row__col-${columnItem.value}`} key={index}>
                            <p>{moment(item[`${columnItem.value}`]).format(`L`)}</p>
                        </td>
                    );
                } else {
                    return (
                        <td className={`new-table__body__row__col-${columnItem.value}`} key={index}>
                            <p>{item[`${columnItem.value}`]}</p>
                        </td>
                    );
                }
            })}
            <td>
                <div className="data-table__datas__actions">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setVisible(true);
                        }}
                        className="data-table__datas__actions__button data-table__datas__actions__button-edit"
                    >
                        <TableIcon.EditIcon color={'#413ED4'} />
                    </button>
                    <button
                        onClick={(e) => e.stopPropagation()}
                        className="data-table__datas__actions__button data-table__datas__actions__button-delete"
                    >
                        <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <TableIcon.DeleteIcon />
                        </Popconfirm>
                    </button>
                </div>
                <ModalComponent
                    visible={visible}
                    setVisible={setVisible}
                    width={window.innerWidth / 2}
                    maskClosable={false}
                    componentForm={
                        <FormEditAccount data={item} visible={visible} setVisible={setVisible}></FormEditAccount>
                    }
                />
            </td>
        </tr>
    );
};

export default Table;
