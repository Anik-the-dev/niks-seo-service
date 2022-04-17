import React from 'react';
import './Services.css'

const SingleService = ({singleItem}) => {
    const {name,price,description,image} = singleItem
    return (
        <div className='card card-service'>
            <img src={image} alt='a'></img>
            <h2>{name}</h2>
            <h3>One Time Charge: ${price}</h3>
            <p>{description}</p><br/>
            <button className='btn'>Checkout</button>
        </div>
    );
};

export default SingleService;