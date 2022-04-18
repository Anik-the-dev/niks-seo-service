import React, { useState } from 'react';
import '../Banner/Banner.css'
import './Login.css'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import AutoSignIn from '../AutoSignIn/AutoSignIn';
import { Link } from 'react-router-dom';

const Login = () => {
    // declare the states......
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    // destructuring the hook......
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // click login btn
    const handleLoginForm = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)

    }

    console.log(user?.user?.uid)





    return (
        <div className='container'>
            <div className='login grid'>
                <div className='login-text my-4'>
                    <h2>Login Here for Checkout Services.</h2>
                    <br/>
                    <p className='f-bold'> Via Google or Via Email</p>
                    <br/>
                    <AutoSignIn></AutoSignIn>
                    <br/>
                    <p className='f-bold'> You can't access the checkout page without Sign In.</p>
                    <br/>
                    <p>New to nikseo? Go to the <Link className='emphasize-text' to='/signup'>Sign Up Page.</Link></p>

                </div>
                <div>
                    <div className="showcase-form card">
                        <h2>Login Here for Checkout.</h2>

                        <form onSubmit={handleLoginForm}>
                            <div className="form-control">
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required></input>
                            </div>
                            <div className="form-control">
                                <input onBlur={(e) => setPass(e.target.value)} type="password" name="password" placeholder="Password" required></input>
                            </div>
                            <input type="submit" value="Login" className="btn btn-primary w-100 p-2"></input>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;