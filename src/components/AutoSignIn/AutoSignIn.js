import React from 'react';
import auth from '../../firebase.init';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../google.png'

const AutoSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user)

    return (
        <div className='flex autosignin' onClick={()=>signInWithGoogle()} >
            <img src={google} alt='google'></img>
            <p>Sign In with Google</p>
        </div>
    );
};

export default AutoSignIn;