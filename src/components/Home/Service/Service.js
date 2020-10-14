import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="col-md-4 my-5 col-sm-6 col-12 col-lg-4">
            <Link to="/dashboard">
                <div className="service p-3 h-100">
                    <div className="m-3 text-center">
                        <img className="rounded-circle" src={img} alt="" width="60px" height="60px" />
                    </div>
                    <div className="m-3 text-center">
                        <h6 className="my-2">{name}</h6>
                        <p className="text-secondary p-2">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;