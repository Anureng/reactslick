import React from 'react'
import logo from './logo.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="container mx-auto py-8 p-10">
            <Slider {...settings}>
                <div className="flex items-center justify-center h-48 bg-blue-500 text-white">
                    <h3 className="text-3xl">1</h3>
                </div>
                <div className="flex items-center justify-center h-48 bg-green-500 text-white">
                    <h3 className="text-3xl">2</h3>
                </div>
                <div className="flex items-center justify-center h-48 bg-red-500 text-white">
                    <h3 className="text-3xl">3</h3>
                </div>
                <div className="flex items-center justify-center h-48 bg-yellow-500 text-white">
                    <h3 className="text-3xl">4</h3>
                </div>
                <div className="flex items-center justify-center h-48 bg-purple-500 text-white">
                    <h3 className="text-3xl">5</h3>
                </div>
                <div className="flex items-center justify-center h-48 bg-pink-500 text-white">
                    <h3 className="text-3xl">6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default Slick
