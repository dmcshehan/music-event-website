import React from 'react';
import Slider from "react-slick";

import image_one from '../../resources/images/slide_one.jpg';
import image_two from '../../resources/images/slide_two.jpg';
import image_three from '../../resources/images/slide_three.jpg';

const Carousel = () => {
    const settings = {
        infinite: true,
        dots: false,
        speed: 500,
        autoplay: true,
    };

    return (
        <div
            className="carrousel_wrapper"
            style={
                {
                    overflow: 'hidden',
                    height: '100vh',
                }
            } >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${image_one})`,
                            height: '100vh',
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${image_two})`,
                            height: '100vh',
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${image_three})`,
                            height: '100vh',
                        }}
                    ></div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;