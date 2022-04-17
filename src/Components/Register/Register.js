import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import google from '../../images/google.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../Loading/Loading';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate()
    if (user) {
        navigate('/checkout')
    }


    // const [signInWithGoogle, googleUser, googleLoading, googlError] = useSignInWithGoogle(auth);

    const handleName = event => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleEmail = event => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event => {
        event.preventDefault()
        setConfirmPassword(event.target.value)
    }



    const handleRegister = event => {
        event.preventDefault()

        createUserWithEmailAndPassword(email, password);

    }

    return (
        <>
            <form onSubmit={handleRegister} className='form-container'>
                <h2>Register</h2>
                <input onChange={handleName} type="text" name="text" placeholder='Enter your name' />
                <br />
                <input onChange={handleEmail} type="email" name="email" placeholder='Enter email address' required />
                <br />
                <input onChange={handlePassword} type="password" name="password" placeholder='Enter password' required />
                <br />
                <input onChange={handleConfirmPassword} type="password" name="confirmPassword" placeholder='Confirm password' required />
                <br />

                <input type="submit" value="Register" />
            </form>
            <p className='m-2'>Already have an account? <Link style={{ textDecoration: 'none' }} to='/login'>Sign in here.</Link></p>
            <GoogleLogin></GoogleLogin>
            {/* <br />
            <p>--------------- Or ----------------</p>
            <button onClick={() => signInWithGoogle()} className="btn-primary p-3 rounded">
                <img className='me-2' src={google} alt="" />
                Sign in using Google
            </button> */}
        </>
    );
};

export default Register;