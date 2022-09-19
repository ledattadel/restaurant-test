import React from 'react';
import FeedRestaurant from '@/components/FeedRestaurant';
import { Typography } from '@mui/material';
import './index.scss';
import * as ReactRedux from 'react-redux';
import * as OrderAction from '@/redux/actions/orderAction';
import { Progress } from 'antd';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home = () => {
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

    return (
        <div className="home">
            <div className="home_fav">
                <div className="home_fav-title">
                    <span>danh mục được yêu thích</span>
                </div>
                <div className="home_fav-percent">
                    {items.map((v) => {
                        return (
                            <div className="home_fav-percent--item">
                                <span className="home_fav-item--name">{v.name}</span>
                                <div className="home_fav-item--circle">
                                    <CircularProgressbar
                                        value={v.percent}
                                        percentage={v.percent}
                                        text={`${v.percent}%`}
                                    >
                                        {' '}
                                    </CircularProgressbar>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="home_center"></div>
            <div className="home_most-ordered"></div>
        </div>
    );
};

export default Home;
