import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='m-2 p-2'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Biology"
                    />
                    <Carousel.Caption>
                        <h3 className='text-light fs-3'>Biology</h3>
                        <p className='text-light fs-4'>Biology is easy!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Chemistry"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary fs-3'>Chemistry</h3>
                        <p className='text-primary fs-4'>Chemistry is amazing!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Math"
                    />

                    <Carousel.Caption>
                        <h3 className='text-light fs-3'>Math</h3>
                        <p className='text-light fs-4'> Math is interesting!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;