import React, { useState } from 'react';
import '../Banner/Banner.css';
import auth from '../../firebase.init';
import '../Login/Login.css'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth'
import AutoSignIn from '../AutoSignIn/AutoSignIn';
import { Link } from 'react-router-dom';

const SignUp = () => {
    // declare the states......
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    // destructuring the hook......
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [sendEmailVerification] = useSendEmailVerification(auth);

    // click the sign up btn......
    const handleRegisterForm = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, pass).then(() => {
            sendEmailVerification()
            alert('Verification mail Sent');
        })

    }
    return (
        <div className='container'>
            <div className='login grid md-flex'>
            <div className='login-text my-4'>
                    <h2>Sign Up Here for Checkout.</h2>
                    <br/>
                    <p className='f-bold'> Via Google or Via Email</p>
                    
                    <AutoSignIn></AutoSignIn>
                    
                    <p className='f-bold'> You can't access the checkout page without Sign In.</p>
                    <br/>
                    <p>Already Signed In? Go to the  <Link className='emphasize-text' to='/login'>Log in Page.</Link></p>

                </div>
              
                <div>
                    <div className="showcase-form card">
                        <h2>Sign Up Here for Checkout.</h2>

                        <form onSubmit={handleRegisterForm}>
                            <div className="form-control">
                                <input onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" required></input>
                            </div>
                            <div className="form-control">
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required></input>
                            </div>
                            <div className="form-control">
                                <input onBlur={(e) => setPass(e.target.value)} type="password" name="password" placeholder="Password" required></input>
                            </div>
                            <input type="submit" value="Sign Up" className="btn btn-primary w-100 p-2"></input>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;