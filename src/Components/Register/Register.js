import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../Loading/Loading';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/checkout')
    }

    let errorElement
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

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
        setConfirmPassword(event.target.value)
    }

    const handleRegister = event => {
        event.preventDefault()
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }
        else if (password !== confirmPassword) {
            setErrors('Passwords do not match')
        }
        else {
            setErrors('Provide valid email')
        }
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
            {errorElement}
            <p className='text-danger'>{errors}</p>
            <p className='m-2'>Already have an account? <Link style={{ textDecoration: 'none' }} to='/login'>Sign in here.</Link></p>
            <GoogleLogin></GoogleLogin>
        </>
    );
};

export default Register;