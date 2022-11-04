import React, { useEffect, useState } from 'react';
import ServieceCard from './ServiceCard/ServieceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-10'>
            <p className='text-2xl text-center text-orange-600 font-bold'>Service</p>
            <p className='text-6xl font-extrabold text-center  '>Our Service Area</p>
            <p className='text-xl  text-center '>the majority have suffered alteration in some form, by injected humour,  or randomised <br />words which don't look even slightly believable. </p>
            <div className='grid grid-cols-3 gap-4 gap-y-5 my-12'>
                {
                    services.map(serve => <ServieceCard
                    key={serve._id}
                    serve={serve}
                    ></ServieceCard> )
                }
                
            </div>
        </div>
    );
};

export default Service;