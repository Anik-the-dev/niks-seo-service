import React from 'react';
import './About.css'

const AboutMe = () => {
    return (
        <div className='container  aboutme'>
            <div className='my-5  grid about'>
                <div className='aboutme-description'>
                    <h1>I am Anik Acharjee - Web Developer & SEO Consultant.</h1>
                    <p>My passion for technical SEO helps over 200+ clients to optimize their websites. <br/>
                        I worked as a lead Technical SEO manager for Wedevs from 2018 to 2020.<br/>
                        I helped a retail shop 'duds fashion' to grow their traffic by more than 550% in 2019-2020.<br/>
                        My Strength defines my honesty at work. I'm more than a helping hand.</p>
                        <button className='btn w-100 my-3 p-2'><span className='sm'>Know More About Me</span></button>

                </div>
                <div className='aboutme-photo'>
                    <img className='rounded' src='anik9.png' alt='anik'></img>
                </div>

            </div>

        </div>
    );
};

export default AboutMe;