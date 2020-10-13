import React from 'react';
import './OurWork.css';

import carousel from '../../images/carousel-1.png'
import carouse2 from '../../images/carousel-2.png'
import carouse3 from '../../images/carousel-3.png'
import carouse4 from '../../images/carousel-4.png'
import carouse5 from '../../images/carousel-5.png'

import ReactCardCarousel from 'react-card-carousel';
import OurWorkCarousel from '../OurWorkCarousel/OurWorkCarousel';

const OurWork = () => {

    var items = [carousel, carouse2, carouse3, carouse4, carouse5]
    return (
        <section className="ourWork text-center my-5">
            <h2 className="font-weight-bold text-center py-5 text-white">Here are some of <span style={{ color: '#71d437' }}>our work</span></h2>

            <div className="carousel container d-flex align-items-center">
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    {
                        items.map((item, i) => <OurWorkCarousel item={item} key={i} />)
                    }
                </ReactCardCarousel>
            </div>
        </section>
    );
};

export default OurWork;