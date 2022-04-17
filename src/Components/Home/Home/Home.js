import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WorkFlow from '../WorkFlow/WorkFlow';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h2 className='fw-bold text-primary bg-light m-2 p-2'>Your tutor</h2>
            <Banner></Banner>
            <Services></Services>
            <WorkFlow></WorkFlow>
            <Footer></Footer>
        </div>
    );
};

export default Home;