import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {


    const [services, setServices] = useState([]);


    //http://localhost:5000

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='text-center mt-10 lg:mt-20 flex-col mx-auto'>
            <div>
                <p className='text-3xl text-orange-600 font-bold'>Services</p>
                <p className='text-3xl'>Our Service area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-auto'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}>

                    </ServiceCard>)
                }
            </div>
            <button className='btn btn-outline mt-10 border-0 text-white bg-gradient-to-r from-orange-600 to-black'>More Service</button>

        </div>
    );
};

export default Services;