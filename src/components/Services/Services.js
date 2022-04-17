import React from 'react';
import useServices from '../hooks/useServices';
import SingleService from './SingleService';

const Services = () => {
    const [service,] = useServices()
    return (
        <div className='container'>
            <h2>My SEO Services</h2>
            <div className='grid grid-three-col'>
                {
                    service.map(item => <SingleService
                    key={item.id} singleItem={item}></SingleService>)
                }
            </div>

        </div>
    );
};

export default Services;