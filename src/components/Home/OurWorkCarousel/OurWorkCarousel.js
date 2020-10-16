import React from 'react';

const OurWorkCarousel = (props) => {

    return (
        <div className="cardStyle">
            <img src={props.item} alt="" className="h-100 w-100" />
        </div>

    );
};

export default OurWorkCarousel;