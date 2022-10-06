import { Col, Row, Popconfirm, message } from 'antd';
import * as React from 'react';
import EditCategoryIcon from '@/assets/edit-category-icon';
import ModalComponent from '@/components/ModalComponent';
import FormAddCategory from '@/components/Form/FormAddCategory';
import FormEditCategory from '@/components/Form/FormEditCategory';
import * as ReactRedux from 'react-redux';
import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI, getImage } from '@/utils/fetchData';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';
import actions from '@/redux/actions/category';
import { useRef } from 'react';
import * as TableIcon from '@/assets/table-icon';
const text = 'Bạn muốn xóa danh mục này?';

const CategoryCard = ({ category, img, deleteCategory }) => {
    const [openModalUpdate, setOpenModalUpdate] = React.useState(false);
    const [hoverBtn, setHoverBtn] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const { functions } = ReactRedux.useSelector((state) => state);
    const modalRef = useRef();
    const dispatch = ReactRedux.useDispatch();

    React.useEffect(() => {}, [openModalUpdate]);

    const updateCategory = (category) => {
        console.log('category', category);
        setVisible(true);
    };

    const confirmDelete = () => {
        // message.info('Xóa thành công.');
        deleteCategory(category.id);
    };

    return (
        <div className="category-card">
            <div className="category-card__cover">
                <img
                    className="category-card__cover__img"
                    alt="example"
                    src={`https://api-fnb.pvssolution.com/fnb-api/api/media/menu/${img}`}
                />
            </div>
            <div className="category-card__info">
                <Row justify="end">
                    <Col className="space-btn">
                        {/* <button
                            className="category-card__info__btn"
                            onMouseOver={() => {
                                setHoverBtn(true);
                            }}
                            onMouseOut={() => {
                                setHoverBtn(false);
                            }}
                            onClick={() => updateCategory(category)}
                        >
                            <EditCategoryIcon color={hoverBtn ? '#F78B2D' : 'white'} />
                        </button>
                        <button
                            className="category-card__info__btn"
                            onMouseOver={() => {
                                setHoverBtn(true);
                            }}
                            onMouseOut={() => {
                                setHoverBtn(false);
                            }}
                            onClick={() => updateCategory(category)}
                        >
                            <EditCategoryIcon color={hoverBtn ? '#F78B2D' : 'white'} />
                        </button> */}

                        <div
                            style={{
                                zIndex: '999',
                            }}
                            className="table_area--head-handing"
                        >
                            <TableIcon.EditIcon onClick={() => updateCategory(category)} color={'#F78B2D'} />

                            <Popconfirm
                                placement="topLeft"
                                onConfirm={confirmDelete}
                                title={text}
                                okText="Yes"
                                cancelText="No"
                            >
                                <TableIcon.DeleteIcon />
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                <Row justify="start">
                    <Col>
                        <span className="category-card__info__name">
                            {category.name.length > 50 ? (
                                <p>{category.name.substring(0, 50)} ...</p>
                            ) : (
                                <p>{category.name}</p>
                            )}
                        </span>
                    </Col>
                </Row>
                <Row justify="end">
                    <Col>
                        <span className="category-card__info__ID">Mã ID: {category.id}</span>
                    </Col>
                </Row>
            </div>
            <ModalComponent
                visible={visible}
                setVisible={setVisible}
                width={window.innerWidth / 2}
                // maskClosable={true}
                componentForm={
                    <FormEditCategory data={category} visible={visible} setVisible={setVisible}></FormEditCategory>
                }
            />
        </div>
    );
};

export default CategoryCard;
