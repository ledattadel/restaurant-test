import React from 'react';
import { Typography } from '@mui/material';
import './index.scss';
import * as ReactRedux from 'react-redux';
import * as OrderAction from '@/redux/actions/orderAction';
import { Progress, Row, Col } from 'antd';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import * as picture from '@/assets/picture/index';
import { Select } from 'antd';
import ProgressBar from '@/components/ProgressBar';

import { Space, Table, Tag } from 'antd';
const { Option } = Select;

const items = [
    {
        name: 'Món xào',
        percent: 25,
        strokeColor: 'green',
    },
    {
        name: 'Món ốc',
        percent: 55,
        strokeColor: 'red',
    },
    {
        name: 'Cơm',
        percent: 10,
        strokeColor: 'orange',
    },
    {
        name: 'Đồ xào',
        percent: 10,
        strokeColor: 'blue',
    },
];
const columns = [
    {
        title: 'Tên món',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => {
            return (
                <div className="recent_dish-column">
                    <img className="recent_dish-column--img" src={record.image} alt=''/>
                    <span className="recent_dish-column--name">{record.name}</span>
                </div>
            );
        },
    },
    {
        title: 'Mã ID',
        dataIndex: 'id',
        key: 'id',
        render: (text, record) => {
            return (
                <div className="recent_dish-cell">
                    <span>{record.id}</span>
                </div>
            );
        },
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
        render: (text, record) => {
            return (
                <div className="recent_dish-cell">
                    <span>{record.price}</span>
                </div>
            );
        },
    },
];
const data = [
    {
        id: '1489',
        name: 'Pizza',
        price: 32,
        image: `${picture.pizza}`,
    },
    {
        id: '1490',
        name: 'My y',
        price: 32,
        image: `${picture.mi}`,
    },
    {
        id: '1491',
        name: 'Dau Hu',
        price: 32,
        image: `${picture.dauhu}`,
    },
    {
        id: '1493',
        name: 'Tom',
        price: 32,
        image: `${picture.tom}`,
    },
];

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="home_fav">
                    <div className="home_fav-title">
                        <span>danh mục được yêu thích</span>
                    </div>
                    <Row className="home_fav-percent">
                        {items.map((v) => {
                            return (
                                <Col className="home_fav-percent--item" xs={24} lg={12} xl={6} xxl={4}>
                                    <span className="home_fav-item--name">{v.name}</span>
                                    <div className="home_fav-item--circle">
                                        <CircularProgressbar
                                            value={v.percent}
                                            percentage={v.percent}
                                            text={`${v.percent}%`}
                                            strokeWidth={4}
                                            styles={{
                                                path: {
                                                    // Path color
                                                    stroke: `${v.strokeColor}`,
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'butt',
                                                    // Customize transition animation
                                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                                    // Rotate the path
                                                },
                                                text: {
                                                    // Text color
                                                    fill: 'black',
                                                    // Text size
                                                    fontSize: '12px',
                                                    textAlign: 'center',
                                                },
                                            }}
                                        >
                                            {' '}
                                        </CircularProgressbar>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
                <div className="home_center">
                    <div className="home_center-recent_dish">
                        <div className="recent_dish-title">
                            <span>món được gọi gần đây</span>
                        </div>
                        <div className="recent_dish-main">
                            <Table
                                className="recent_dish-table"
                                columns={columns}
                                dataSource={data}
                                pagination={false}
                            ></Table>
                        </div>
                    </div>
                    <div className="home_center-turnover">
                        <div className="turnover-title">
                            <span>doanh thu theo tháng</span>
                        </div>
                        <div className="turnover-select">
                            <Select
                                defaultValue="1"
                                style={{
                                    width: 120,
                                }}
                                // onChange={handleChange}
                            >
                                <Option value="1">Tháng 1</Option>
                                <Option value="2">Tháng 2</Option>
                                <Option value="3">Tháng 3</Option>
                                <Option value="4">Tháng 4</Option>
                                <Option value="5">Tháng 5</Option>
                                <Option value="6">Tháng 6</Option>
                                <Option value="7">Tháng 7</Option>
                                <Option value="8">Tháng 8</Option>
                                <Option value="9">Tháng 9</Option>
                                <Option value="10">Tháng 10</Option>
                                <Option value="11">Tháng 11</Option>
                                <Option value="12">Tháng 12</Option>
                            </Select>
                        </div>
                        <div className="turnover-seperate">
                            <div className="turnover-seperate--w week-1">
                                <span>Tuần 1</span>
                                <ProgressBar bgcolor={'orange'} completed={10}></ProgressBar>
                            </div>
                            <div className="turnover-seperate--w week-2">
                                <span>Tuần 2</span>
                                <ProgressBar bgcolor={'orange'} completed={25}></ProgressBar>
                            </div>
                            <div className="turnover-seperate--w week-3">
                                <span>Tuần 3</span>
                                <ProgressBar bgcolor={'orange'} completed={30}></ProgressBar>
                            </div>
                            <div className="turnover-seperate--w week-4">
                                <span>Tuần 4</span>
                                <ProgressBar bgcolor={'orange'} completed={35}></ProgressBar>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_most-ordered">
                    <div className="most-ordered-title">
                        <span>món ăn gọi nhiều nhất</span>
                    </div>
                    <Row className="most-ordered-list">
                        <Col className="most-ordered-item">
                            <img src={picture.top} alt='Mỳ ý đặc biệt'/>
                            <div className="most-ordered-item--info">
                                <div className="most-ordered-item--info-1">
                                    <span className="info-name">Mỳ ý đặc biệt</span>
                                    <span className="info-price">120.000</span>
                                </div>
                                <span className="item-sold">
                                    Đã bán: <span>223</span>
                                </span>
                            </div>
                        </Col>
                        <Col className="most-ordered-item">
                            <img src={picture.top} alt='Mỳ ý đặc biệt'/>
                            <div className="most-ordered-item--info">
                                <div className="most-ordered-item--info-1">
                                    <span className="info-name">Mỳ ý đặc biệt</span>
                                    <span className="info-price">120.000</span>
                                </div>
                                <span className="item-sold">
                                    Đã bán: <span>223</span>
                                </span>
                            </div>
                        </Col>
                        <Col className="most-ordered-item">
                            <img src={picture.top} alt='Mỳ ý đặc biệt'/>
                            <div className="most-ordered-item--info">
                                <div className="most-ordered-item--info-1">
                                    <span className="info-name">Mỳ ý đặc biệt</span>
                                    <span className="info-price">120.000</span>
                                </div>
                                <span className="item-sold">
                                    Đã bán: <span>223</span>
                                </span>
                            </div>
                        </Col>
                        <Col className="most-ordered-item">
                            <img src={picture.top} alt='Mỳ ý đặc biệt'/>
                            <div className="most-ordered-item--info">
                                <div className="most-ordered-item--info-1">
                                    <span className="info-name">Mỳ ý đặc biệt</span>
                                    <span className="info-price">120.000</span>
                                </div>
                                <span className="item-sold">
                                    Đã bán: <span>223</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;
