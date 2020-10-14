import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AddAdmin.css';


const AddService = () => {
    return (
        <div className="rightSide">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <nav className="navbar mr-auto d-flex justify-content-between">
                        <p className="orderTitle font-weight-bold">Add Services</p>
                        <p className="customerName">Customer Name</p>
                    </nav>

                    <div>
                        <form action="">
                            <label htmlFor="">
                                <input type="text" placeholder="Your name" className="pl-3 mb-3" />
                            </label>
                            <button className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddService;