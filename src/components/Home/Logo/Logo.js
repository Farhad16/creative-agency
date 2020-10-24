import React from 'react';
import './Logo.css';

const Logo = ({ logo }) => {
    return (
        <div className="col-md-2 mb-3 col-12 col-lg-2 d-flex justify-content-center">
            <img src={logo} alt="" />
        </div>
    );
};

export default Logo;