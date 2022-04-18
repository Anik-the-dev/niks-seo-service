import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Services.css'
import RequireAuth from '../RequireAuth/RequireAuth';
import CheckOUt from '../CheckOut/CheckOUt';

const SingleService = ({ singleItem }) => {
    const { name, price, description, image } = singleItem
    const [user, loading, error] = useAuthState(auth);

    // const handleCheckOut = () => {
    //     <RequireAuth>
    //         <CheckOUt></CheckOUt>
    //     </RequireAuth>

    // }
    return (
        <div className='card card-service'>
            <img src={image} alt='service'></img>
            <h2>{name}</h2>
            <h3>One Time Charge: ${price}</h3>
            <p>{description}</p><br />
            <button className='btn'>
                <Link to='/checkout'>Checkout Now</Link>
            </button>
        </div>
    );
};

export default SingleService;