import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="rightSide">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7">
                    <nav className="navbar mr-auto d-flex justify-content-between">
                        <p className="orderTitle font-weight-bold">Add Services</p>
                        <p className="customerName">Customer Name</p>
                    </nav>

                    <div className="order-form">
                        <div className="pb-5">
                            <div className="row p-5">
                                <div className="col-md-10 text-white bg-white m-3 p-5">
                                    <form action="">
                                        <span className="text-dark">Email</span><br />
                                        <input type="text" placeholder="@gmail.com" className="input-field titleInput pl-3 my-3" />
                                        <button className="btn btn-success">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MakeAdmin;