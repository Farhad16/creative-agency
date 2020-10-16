import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { title, description, img, image } = service;
    return (
        <div className="col-md-4 mb-3 col-sm-6 col-12 col-lg-4">
            <Link to="/dashboard">
                <div className="service p-3 h-100 mb-3">
                    <div className="m-3 text-center">
                        {
                            image ? <img className="rounded-circle img-style" src={`data:image/png;base64,${image.img}`} alt="" width="60px" height="60px" />
                                :
                                <img className="rounded-circle img-style" src={`https://dry-bastion-62808.herokuapp.com/${img}`} alt="" width="60px" height="60px" />
                        }
                    </div>
                    <div className="m-3 text-center">
                        <h6 className="my-2 text-dark">{title}</h6>
                        <small className="text-secondary p-2">{description}</small>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;