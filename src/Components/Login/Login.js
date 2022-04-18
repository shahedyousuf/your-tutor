import React, { useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import google from '../../images/google.png';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const emailRef = useRef('')
    // const passwordRef = useRef('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)


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
        // const email = emailRef.current.value
        // const password = event.current.value

        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        // const email = event.target.email.value
        // const email = emailRef.current.value
        if (email) {

            await sendPasswordResetEmail(email);
            toast('Email sent');
        }
        else {
            toast('Please enter your email')
        }

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
            {errorElement}
            <p className='m-2'>Don't have an account? <Link style={{ textDecoration: 'none' }} to='/register'>Register here.</Link></p>
            <p className='m-2'>Forget your password? <button className='btn btn-link' style={{ textDecoration: 'none' }} onClick={resetPassword}>Reset password.</button></p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer />
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