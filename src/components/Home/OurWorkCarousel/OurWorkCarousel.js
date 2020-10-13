import React from 'react';

const OurWorkCarousel = (props) => {
    const cardStyle = {
        height: '400px',
        width: '100%',
        textAlign: 'center',
        borderRadius: '10px',
        cursor: 'pointer',
        background: '#ffffff'
    };
    return (
        <div style={cardStyle}>
            <img src={props.item} alt="" className="h-100 w-100" />
        </div>

    );
};

export default OurWorkCarousel;