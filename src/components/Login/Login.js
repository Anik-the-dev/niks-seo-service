import React from 'react';
import '../Banner/Banner.css'
import './Login.css'

const Login = () => {
    return (
        <div className='container'>
            <div className='login grid'>
                <div className='p-2'>
                    <h2>Login Here for Checkout Services.</h2>
                </div>
                <div>
                    <div className="showcase-form card">
                        <h2>Login Here for Checkout Services.</h2>

                        <form>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Email" required></input>
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" placeholder="Password" required></input>
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