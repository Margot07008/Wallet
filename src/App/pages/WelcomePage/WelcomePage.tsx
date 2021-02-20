import * as React from 'react';
import './WelcomePage.scss';
import HelloText from './HelloText';
import { Carousel, Typography } from 'antd';
import SearchTextarea from './SearchTextarea';
import SearchAddress from './SearchAddress';

const { Text } = Typography;

const WelcomePage = () => {
    return (
        <div className="welcome-bg">
            <HelloText />
            <Carousel
                infinite={false}
                dotPosition="top"
                className="carousel"
                swipe={false}
                easing="none"
            >
                <div className="input-window">
                    <SearchTextarea />
                </div>
                <div className="input-window">
                    <SearchAddress />
                </div>
            </Carousel>
        </div>
    );
};

export default WelcomePage;
