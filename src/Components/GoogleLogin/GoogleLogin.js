import React from 'react';
import google from '../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    let errorElement
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }

    if (user) {
        navigate('/checkout')
    }

    return (
        <div>
            <div className=''>
                <br />
                <p>----------------- Or ------------------</p>
            </div>
            <div>
                {errorElement}
                <button onClick={() => signInWithGoogle()} className="btn btn-primary d-block mx-auto">
                    <img className='me-2' src={google} alt="" />
                    <span className='px-2'>Sign in using Google</span>
                </button>
            </div>
        </div >
    );
};

export default GoogleLogin;