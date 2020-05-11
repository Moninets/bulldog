import React from 'react';
import BannerBg from '../image/background_banner.png';
import BannerCars from '../image/cars_banner.png';

const Banner = () => {
    return (

        <div className="banner">
                <img className="banner_bg" src={BannerBg} alt="BannerBG"/>
                <div className="caption">
                    <p className="subtitle">
                        Premier certified paint correction and coating specialists
                    </p>
                    <h1 className="banner_title">
                        Premier certified paint correction and coating specialists
                    </h1>
                </div>
                <img className="banner_cars" src={BannerCars} alt="BannerCars"/>
                <a href="#" className="button-blu">
                    Contact Us
                </a>
        </div>
    );
};

export default Banner;