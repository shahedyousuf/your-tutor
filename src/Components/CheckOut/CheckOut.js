import React from 'react';
import './CheckOut.css'

const CheckOut = () => {
    const handleSubmit = () => {
        alert('Thank you for booking')
    }
    return (
        <div>
            <h2>Welcome to checkout</h2>
            <form onSubmit={handleSubmit} className='form-container'>
                <input type="text" name="name" placeholder='Your name' required />
                <br />
                <input type="email" name="email" placeholder='Your email' />
                <br />
                <input type="number" name="phone" placeholder='Phone number' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CheckOut;