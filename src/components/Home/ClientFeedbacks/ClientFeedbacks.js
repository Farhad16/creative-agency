import React, { useEffect, useState } from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';


const ClientFeedbacks = () => {
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
                        feedbacks.length ? feedbacks.map((feedback, i) => <ClientFeedback key={i} feedback={feedback}></ClientFeedback>)
                            : <div className="col-md-12 d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedbacks;