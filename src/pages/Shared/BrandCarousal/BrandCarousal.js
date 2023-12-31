import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/Brands/Brand1.png.url';
import Brand2 from '../../../assets/Brands/Brand2.png.url';

const BrandCarousal = () => {
    return (
        <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Brand1}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Brand2}
                alt="Second slide"
            />
        </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarousal;