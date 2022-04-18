import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut =()=>{
        signOut(auth);

    }
    return (

        <div class="navbar">
            <div class="container flex">
                <h1 class="logo">nikseo.</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    {
                        user?.uid ? 
                        <button onClick={handleSignOut} className='btn btn-outline rounded'>Sign Out</button>
                        :
                        <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                        </ul>
                    }
                    


                </ul>
            </div>
        </div>
    );
};

export default Header;