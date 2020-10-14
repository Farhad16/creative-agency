import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const CustomerReview = () => {
    return (
        <div className="rightSide">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <nav className="navbar mr-auto d-flex justify-content-between">
                        <p className="orderTitle">Review</p>
                        <p className="customerName">Customer Name</p>
                    </nav>
                    <div className="order-form">
                        <div className="pb-5">
                            <div className="row p-5">
                                <div className="col-md-8 text-white">
                                    <form action="">
                                        <input type="text" placeholder="Your name" className="input-field pl-3 mb-3" /><br />
                                        <input type="text" placeholder="Company name. Designation" className="input-field pl-3 mb-3" /><br />
                                        <input type="text" placeholder="Description" className="input-field project pl-3 mb-3" /><br />
                                        <button className="btn text-brand mt-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;