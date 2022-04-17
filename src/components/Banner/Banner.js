import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <section class="showcase">
            <div class="container grid">
                <div class="showcase-text">
                    <h1>Boost Google Ranking's with Me.</h1>
                    <p>I am Anik Acharjee worked as a lead Technical SEO manager for Wedevs from 2018 to 2020. I helped a retail shop 'duds fashion' to grow their traffic by more than 550% in 2019-2020.</p>
                    <Link class="btn btn-outline" to='/about'>About Me</Link>
                </div>

                <div class="showcase-form card">
                    <h2>Request a FREE SEO Audit</h2>

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