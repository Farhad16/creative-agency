import React, { useEffect, useState } from 'react';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';


const CustomerFeedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/feedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, []);

    return (
        <section className="justify-content-center my-5">
            <h2 className="font-weight-bold text-center pt-5"><span style={{ color: '#111430' }}>Client</span>  <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            <div className="d-flex justify-content-center">
                <div className="w-75 row my-5">
                    {
                        feedbacks.length ? feedbacks.map((feedback, i) => <CustomerFeedback key={i} feedback={feedback}></CustomerFeedback>)
                            : <div className="col-md-12 d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default CustomerFeedbacks;