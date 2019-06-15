import React from 'react';
import Carousel from './Carousel';
import TimeUnit from './TimeUnit';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Carousel />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <TimeUnit />
        </div>
    );
};

export default Featured;