import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';

import customer1 from '../../images/customer-1.png'
import customer2 from '../../images/customer-2.png'
import customer3 from '../../images/customer-3.png'

const ClientFeedbacks = () => {
    const feedbackData = [
        {
            name: 'Nash Patrik',
            position: 'CEO Manpal',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nam ab magni quod, molestias recusandae",
            img: customer1
        },
        {
            name: 'Miriam Barron',
            position: 'CEO Manpal',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nam ab magni quod, molestias recusandae",
            img: customer2
        },
        {
            name: 'Bria Malone',
            position: 'CEO Manpal',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nam ab magni quod, molestias recusandae",
            img: customer3
        }
    ]
    return (
        <section className="justify-content-center my-5">
            <h2 className="font-weight-bold text-center pt-5"><span style={{ color: '#111430' }}>Client</span>  <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            <div className="d-flex justify-content-center">
                <div className="w-75 row my-5">
                    {
                        feedbackData.map((feedback, i) => <ClientFeedback key={i} feedback={feedback}></ClientFeedback>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedbacks;