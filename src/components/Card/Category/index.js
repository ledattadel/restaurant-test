import { Col, Row } from 'antd';
import React from 'react';
import EditCategoryIcon from '@/assets/edit-category-icon';

const CategoryCard = ({ category }) => {
    const [hoverBtn, setHoverBtn] = React.useState(false);

    return (
        <div className="category-card">
            <div className="category-card__cover">
                <img className="category-card__cover__img" alt="example" src={category.image} />
            </div>
            <div className="category-card__info">
                <Row justify="end">
                    <Col className="space-btn">
                        <button
                            className="category-card__info__btn"
                            onMouseOver={() => {
                                setHoverBtn(true);
                            }}
                            onMouseOut={() => {
                                setHoverBtn(false);
                            }}
                        >
                            <EditCategoryIcon color={hoverBtn ? '#F78B2D' : 'white'} />
                        </button>
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
                        <span className="category-card__info__ID">Mã ID: {category.ID}</span>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default CategoryCard;
