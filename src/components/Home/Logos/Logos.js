import React from 'react';
import slack from '../../images/logos/slack.png';
import google from '../../images/logos/google.png';
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png';
import airbnb from '../../images/logos/airbnb.png';
import './Logos.css';


const Logos = () => {
    return (
        <section className="logo d-flex align-items-center justify-content-center my-5">
            <div className="container row my-3">
                <div className="col-md-2 p-2 offset-md-1">
                    <img src={slack} alt="" />
                </div>
                <div className="col-md-2 p-2">
                    <img src={google} alt="" />
                </div>
                <div className="col-md-2 p-2">
                    <img src={uber} alt="" />
                </div>
                <div className="col-md-2 p-2">
                    <img src={netflix} alt="" />
                </div>
                <div className="col-md-2 p-2">
                    <img src={airbnb} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Logos;