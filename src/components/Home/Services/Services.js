import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="justify-content-center my-5">
            <h2 className="font-weight-bold text-center pt-5">Proveide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
            <div className="d-flex justify-content-center">
                <div className="w-75 row my-5">

                    {
                        services.length ? services.map((service, i) => <Service key={i} service={service}></Service>) :
                            <div className="col-md-12 d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </section>

    );
};

export default Services;