import React from 'react';
import './NotFound.css';
import image from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center gap-4'>
            <h2 className='text-danger me-8'>OOPS!!</h2>
            <div className='ms-4'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFound;