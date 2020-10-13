import React from 'react';

import webDesign from '../../images/icons/webDesign.png'
import webDevelopment from '../../images/icons/webDevelop.png'
import graphics from '../../images/icons/graphics.png'
import Service from '../Service/Service';


const Services = () => {

    const serviceData = [
        {
            name: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product',
            img: webDesign
        },
        {
            name: 'Graphic design',
            description: 'Amazing flyers social media post and brand representation that would make your brand stand out',
            img: graphics
        },
        {
            name: 'Web Development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general',
            img: webDevelopment
        }
    ];


    return (
        <section className="justify-content-center my-5">
            <h2 className="font-weight-bold text-center pt-5">Proveide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        serviceData.map((service, i) => <Service key={i} service={service}></Service>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Services;