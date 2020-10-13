import React from 'react';

const Logo = ({ logo }) => {
    return (
        <div className="col-md-2 p-2 col-12 d-flex justity-content-center">
            <img src={logo} alt="" />
        </div>
    );
};

export default Logo;