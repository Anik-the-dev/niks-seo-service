import React from 'react';
import { Link } from 'react-router-dom';

import './Services.css'


const SingleService = ({ singleItem }) => {
    const { name, price, description, image } = singleItem
    

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