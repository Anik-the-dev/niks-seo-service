import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <section class="showcase">
            <div class="container grid">
                <div class="showcase-text">
                    <h1>Boost Google Ranking's with Me.</h1>
                    <p>I am Anik Acharjee a 3 years experienced SEO Consulted helped more than 75 companies to grow their search engine ranking in last 2 years.</p>
                    <Link class="btn btn-outline" to='/about'>About Me</Link>
                </div>

                <div class="showcase-form card">
                    <h2>Request a <span className='emphasize-text'> FREE. </span> SEO Audit</h2>

                    <form>
                        <div class="form-control">
                            <input type="text" name="name" placeholder="Name" required></input>
                        </div>
                        <div class="form-control">
                            <input type="text" name="company" placeholder="Company Name" required></input>
                        </div>
                        <div class="form-control">
                            <input type="email" name="email" placeholder="Email" required></input>
                        </div>
                        <input type="submit" value="Send" class="btn btn-primary"></input>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Banner;