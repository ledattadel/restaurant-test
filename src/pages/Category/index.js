import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as DishAction from '@/redux/actions/dishAction';
import { Col, Row } from 'antd';
import { CategoryCard } from '@/components';
import { postDataAPI, getDataAPI, getWithParams, deleteWithParams, putDataAPI, getImage } from '@/utils/fetchData';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';
import ModalComponent from '@/components/ModalComponent';

const Category = () => {
    const [listCate, setListCate] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const { category } = ReactRedux.useSelector((state) => state);

    const dispatch = ReactRedux.useDispatch();

    const getAllCates = async () => {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        let { data } = await getWithParams({
            path: `menus`,
            params: { companyId: currentUser.companyId },
        });

        dispatch({
            type: GLOBALTYPES.LOADCATE,
            payload: data,
        });
    };

    React.useEffect(() => {
        if (listCate === null || isDelete) {
            getAllCates();
            setIsDelete(false);
        }
    }, [isDelete]);
    // const DeleteDish = (id) => {
    //     dispatch(DishAction.deleteDish(id));
    //     setIsDelete(true);
    // };

    return (
        <div className="category">
            <Row gutter={[window.innerWidth / 60, window.innerWidth / 60]}>
                {category.data ? (
                    category.data.map((v) => {
                        return (
                            <Col
                                key={v.id}
                                className="grid__col"
                                xxl={{ span: 4 }}
                                xl={{ span: 6 }}
                                sm={{ span: 8 }}
                                xs={{ span: 24 }}
                            >
                                <CategoryCard img={v.image} category={v} />
                            </Col>
                        );
                    })
                ) : (
                    <></>
                )}
            </Row>
        </div>
    );
};

export default Category;
