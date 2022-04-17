import React from 'react';
import AboutMe from '../About/AboutMe';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <h1 className='text-center my-4 lg'>Know Anik - Myself</h1>
            <AboutMe></AboutMe>
            
        </div>
    );
};

export default Home;