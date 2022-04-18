import React, { useState } from 'react';
import '../Banner/Banner.css';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
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

    // click the sign up btn......
    const handleRegisterForm = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, pass).then(() => console.log(email))

    }
    return (
        <div className='container'>
            <div className='login grid'>
                <div className='p-2'>
                    <h2>Login Here for Checkout Services.</h2>
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