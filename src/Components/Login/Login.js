import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import google from '../../images/google.png'

const Login = () => {
    return (
        <>
            <form className='form-container'>
                <h2>Sign in</h2>
                <input type="email" name="email" placeholder='Enter email address' required />
                <br />
                <input type="password" name="password" placeholder='Enter password' required />
                <br />
                <input type="submit" value="Sign in" />
            </form>
            <p className='m-2'>Don't have an account? <Link style={{ textDecoration: 'none' }} to='/register'>Register here.</Link></p>

            <br />
            <button className="btn-primary p-3 rounded">
                <img className='me-2' src={google} alt="" />
                Sign in using Google
            </button>
        </>
    );
};

export default Login;