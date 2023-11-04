import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import S1 from '../assets/ship1.jpeg';
import S2 from '../assets/ship2.jpeg';
import S3 from '../assets/ship3.jpeg';
import S4 from '../assets/ship4.jpeg';

const carouselContainerStyle = {
    maxHeight: '500px',
};

const imageStyle = {
    maxHeight: '500px',
    borderRadius: '5px'
};

const CarouselContainer = () => {
    return (
        <div style={carouselContainerStyle}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                <div>
                    <img src={S1} alt="Img 1" style={imageStyle} />
                </div>
                <div>
                    <img src={S2} alt="Img 2" style={imageStyle} />
                </div>
                <div>
                    <img src={S3} alt="Img 3" style={imageStyle} />
                </div>
                <div>
                    <img src={S4} alt="Img 4" style={imageStyle} />
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselContainer;
