import React, { Component } from "react";
import Slider from "react-slick";
import './slider.css';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import sl1 from '../images/Lingua desktop 2.png';
import sl2 from '../images/Lingua desktop 2.png';
import sl3 from '../images/Lingua desktop 2.png';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            centerMode: true,
            centerPadding: '360px',
            dots: true,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '220px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '150px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 880,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '15px',
                        slidesToShow: 1
                    }
                },
            ]
        };
        return (
            <section className="slider">
            <div className="reviews-slider">
                <Slider {...settings}>
                    <div className="reviews-slider-item">
                        <img src={sl1} alt="logo" />
                    </div>
                    <div className="reviews-slider-item">
                        <img src={sl2} alt="logo" />
                    </div>
                    <div className="reviews-slider-item">
                        <img src={sl3} alt="logo" />
                    </div>
                </Slider>
            </div>
            </section>
        );
    }
}