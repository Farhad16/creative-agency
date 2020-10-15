import React from 'react';

const CustomerFeedback = ({ feedback }) => {
    const { name, designation, description, img } = feedback

    return (
        <div className="col-md-4">
            <div className="card mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                        <img className="rounded-circle mr-3" src={img} alt="" width="50px" height="50px" />
                        <h6 className="card-title font-weight-bold">{name} <br /> <small>{designation}</small> </h6>
                    </div>
                    <p className="card-text"><small>{description}</small> </p>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;