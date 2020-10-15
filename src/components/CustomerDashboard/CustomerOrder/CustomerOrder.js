import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './CustomerOrder.css'


const CustomerOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="rightSide">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <nav className="navbar mr-auto d-flex justify-content-between">
                        <p className="orderTitle">Order</p>
                        <p className="customerName">{loggedInUser.displayName}</p>
                    </nav>
                    <div className="order-form">
                        <div className="pb-5">
                            <div className="row p-5">
                                <div className="col-md-8 text-white">
                                    <form action="">
                                        <input type="text" placeholder="Your name / company's name" className="input-field pl-3 mb-3" /><br />
                                        <input type="text" placeholder="Your email address" className="input-field pl-3 mb-3" /><br />
                                        <input type="text" placeholder="order Name" className="input-field pl-3 mb-3" /><br />
                                        <input type="text" placeholder="Project Details" className="input-field project pl-3 mb-3" /><br />
                                        <input type="text" placeholder="Price" className="input-field pl-3 mb-3" />
                                        <button className="btn text-brand mt-2">Send</button>
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

export default CustomerOrder;