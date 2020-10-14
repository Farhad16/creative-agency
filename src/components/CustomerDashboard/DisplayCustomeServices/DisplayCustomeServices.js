import React from 'react';
import './DisplayCustomeServices.css'

const DisplayCustomeServices = ({ service }) => {
    const { name, description, img } = service;

    return (
        <div className="col-md-4 mb-5">
            <div className="card order-list mb-3 h-100" style={{ maxWidth: "18rem" }}>
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <img className="rounded-circle mr-3" src={img} alt="" width="50px" height="50px" />
                        <h5 className="mr-3"><small>Status</small></h5>
                    </div>
                    <p className="card-text"><small>{description}</small> </p>
                </div>
            </div>
        </div>
    );
};

export default DisplayCustomeServices;