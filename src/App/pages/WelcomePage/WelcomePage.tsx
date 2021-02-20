import * as React from 'react';
import './WelcomePage.scss';
import HelloText from './HelloText';
import SearchTextarea from './SearchTextarea';
import SearchAddress from './SearchAddress';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WelcomePage = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    return (
        <div className="welcome-bg">
            <HelloText />
            <Slider {...settings}>
                <div className="input-window">
                    <SearchTextarea />
                </div>
                <div className="input-window">
                    <SearchAddress />
                </div>
            </Slider>
        </div>
    );
};

export default WelcomePage;
