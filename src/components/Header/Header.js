import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        
        <div class="navbar">
            <div class="container flex">
                <h1 class="logo">nikseo.</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Header;