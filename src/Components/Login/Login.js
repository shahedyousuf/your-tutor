import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import google from '../../images/google.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const [signInWithGoogle, googleUser, googleLoading, googlError] = useSignInWithGoogle(auth);


    const navigate = useNavigate()
    if (user) {
        navigate('/checkout')

    }

    let errorElement
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }




    const handleEmail = event => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleSignIn = event => {
        event.preventDefault()

        signInWithEmailAndPassword(email, password)
    }


    return (
        <>
            <form onSubmit={handleSignIn} className='form-container'>
                <h2>Sign in</h2>
                <input onChange={handleEmail} type="email" name="email" placeholder='Enter email address' required />
                <br />
                <input onChange={handlePassword} type="password" name="password" placeholder='Enter password' required />
                <br />
                <input type="submit" value="Sign in" />
            </form>
            <p className='m-2'>Don't have an account? <Link style={{ textDecoration: 'none' }} to='/register'>Register here.</Link></p>
            <GoogleLogin></GoogleLogin>
            {/* <br />
            <p>--------------- Or ----------------</p>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className="btn-primary p-3 rounded">
                <img className='me-2' src={google} alt="" />
                Sign in using Google
            </button> */}
        </>
    );
};

export default Login;