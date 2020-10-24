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
        <section className="logo my-5 justify-content-center">
            <div className="d-flex justify-content-center">
                <div className="offset-md-1">

                </div>
                <div className="w-75 row mt-5">
                    {
                        allLogos.map((logo, i) => <Logo key={i} logo={logo}></Logo>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Logos;
