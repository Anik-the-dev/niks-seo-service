import React from 'react';
import useServices from '../hooks/useServices';
import SingleService from './SingleService';
import './Services.css'

const Services = () => {
    const [service,] = useServices()
    return (
        <div className='container'>
            <div className='my-5'>
                <h2 className='text-center my-4 lg'>My SEO Services</h2>
                <div className='grid grid-three-col md-flex'>
                    {
                        service.map(item => <SingleService
                            key={item.id} singleItem={item}></SingleService>)
                    }
                </div>

            </div>


        </div>
    );
};

export default Services;