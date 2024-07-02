import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='text-center lg:mt-20'>
            <div>
                <p className='text-3xl text-orange-600 font-bold'>Services</p>
                <p className='text-3xl'>Our Service area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}>

                    </ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;