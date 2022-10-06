import FormEditDish from '@/components/Form/FormEditDish';
import ModalComponent from '@/components/ModalComponent';
import { Button, Card, Col, Row, Tag } from 'antd';
import { message, Popconfirm } from 'antd';
import React from 'react';
// import * as fetchData from '@/utils/fetchData';
// import * as ReactRedux from 'react-redux';
// import * as DishAction from '@/redux/actions/dishAction';
// import { GLOBALTYPES } from '@/redux/actions/globalTypes';

// import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI, getImage } from '@/utils/fetchData';

const text = 'Bạn muốn xóa món này?';
const ProductCard = ({ DeleteDish, product, img }) => {
    // const [openModalUpdate, setOpenModalUpdate] = React.useState(false);
    // const [hoverBtn, setHoverBtn] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    // const dispatch = ReactRedux.useDispatch();

    const confirm = () => {
        DeleteDish(product.id);
    };

    const updateDish = (product) => {
        setVisible(true);
    };
    // console.log(product);
    return (
        <Card
            hoverable
            className="product-card"
            cover={
                <img
                    className="product-card__img"
                    alt="example"
                    src={`https://api-fnb.pvssolution.com/fnb-api/api/media/dishes/${img}`}
                />
            }
        >
            <div className="product-card__info">
                <Row justify="space-between" className="product-card__info__row">
                    <Col>
                        <span className="product-card__info__name">
                            {product.name.length > 50 ? (
                                <p>{product.name.substring(0, 50)} ...</p>
                            ) : (
                                <p>{product.name}</p>
                            )}
                        </span>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col className="product-card__info__col">
                        <span className="product-card__info__sale-number">Mã ID: {product.id}</span>
                        {product.status.code === 'STOCKING' ? (
                            <Tag className="product-card__info__status">Có món</Tag>
                        ) : (
                            <Tag className="product-card__info__status_not">Hết món</Tag>
                        )}
                    </Col>
                    <Col className="product-card__info__col">
                        <span className="product-card__info__price">
                            <p>
                                {product.price &&
                                    parseInt(product.price).toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                            </p>
                        </span>
                        <span className="product-card__info__discount">
                            {product.priceDiscount &&
                                parseInt(product.priceDiscount).toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <p className="product-card__info__description">
                            {product.description.length > 150 ? (
                                <>{product.description.substring(0, 150)}...</>
                            ) : (
                                <>{product.description}</>
                            )}
                        </p>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col className="space-btn">
                        {/* <Button className="product-card__info__btn product-card__info__btn-del">Xóa món</Button> */}
                        <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <Button className="product-card__info__btn product-card__info__btn-del">Xóa món</Button>
                        </Popconfirm>
                    </Col>
                    <Col className="space-btn">
                        <Button
                            onClick={() => updateDish(product)}
                            className="product-card__info__btn product-card__info__btn-edit"
                        >
                            Chỉnh sửa
                        </Button>
                    </Col>
                </Row>
            </div>
            <ModalComponent
                visible={visible}
                setVisible={setVisible}
                width={window.innerWidth / 1.7}
                componentForm={<FormEditDish data={product} visible={visible} setVisible={setVisible}></FormEditDish>}
            />
        </Card>
    );
};
export default ProductCard;
