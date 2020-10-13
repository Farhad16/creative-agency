import React from 'react';
import slack from '../../images/logos/slack.png';
import google from '../../images/logos/google.png';
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png';
import airbnb from '../../images/logos/airbnb.png';
import './Logos.css';
import Logo from '../Logo/Logo';


const Logos = () => {
    const allLogos = [slack, google, uber, netflix, airbnb];
    return (
        <section className="logo d-flex align-items-center justify-content-center my-5">
            <div className="container row my-5">
                <div className="offset-md-1">
                </div>
                {
                    allLogos.map((logo, i) => <Logo key={i} logo={logo}></Logo>)
                }
            </div>
        </section>
    );
};

export default Logos;