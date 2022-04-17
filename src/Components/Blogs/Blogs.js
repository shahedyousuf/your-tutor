import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='d-flex p-3 m-2 col gap-2 blogs-container'>
            <div className='blog-1'>
                <h3>Authorization vs authentication</h3>
                <p>Authentication is the process of verifying an user. Example can be given as we show passport to authenticate ourselves in airport.
                    Authorization is the process of verifying which rights they have access to or not?
                    Authentication is performed before authorization. </p>
            </div>
            <div className='blog-2'>
                <h3>Why use firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase is simple and lightweight. It helps to create a quick, ready-made backend.
                    For security purposes firebase has really good features.

                    We use firebase for authentication. Auth0, Okta, Back4app, Passport, MongoDB, Parse, AWS Amplify can be used as alternative of firebase.
                </p>
            </div>
            <div className='blog-3'>
                <h3>Other services provided by firebase</h3>
                <p>Firebase provides other services as well. For backend development for mobile and web apps firebase is used.
                    It's also a prototyping tool. It also supports hosting your app in cloud.
                    Google analytics feature of firebase can help you to know purchasing patters.
                </p>
            </div>
        </div>
    );
};

export default Blogs;