import React, { useState } from 'react';
import '../Banner/Banner.css'
import './Login.css'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

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
                <div className='p-2'>
                    <h2>Login Here for Checkout Services.</h2>
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