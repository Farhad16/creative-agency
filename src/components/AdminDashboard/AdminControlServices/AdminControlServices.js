import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import DisplayCustomerService from '../DisplayCustomerService/DisplayCustomerService';
import './AdminControlServices.css';


const AdminControlServices = () => {

    const serviceList = [
        {
            name: 'Web & Mobile design',
            serviceName: 'Web design',
            description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product  well drafted UX to fit your product',
            email: 'fhossain@gmail.com',
            status: 'Done'
        },

        {
            name: 'Web & Mobile design',
            serviceName: 'Web design',
            description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product',
            email: 'fhossain@gmail.com',
            status: 'pending'
        },

        {
            name: 'Web & Mobile design',
            serviceName: 'Web design',
            description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product',
            email: 'fhossain@gmail.com',
            status: 'Ongoing'
        },
    ];

    return (
        <div className="rightSide">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <nav className="navbar mr-auto d-flex justify-content-between">
                        <p className="orderTitle font-weight-bold">Service List</p>
                        <p className="customerName">Customer Name</p>
                    </nav>

                    <div className="customerList p-3">
                        <div className="bg-white overflow-auto m-3 p-5">
                            <table className="table-style">
                                <thead>
                                    <tr className="backColor">
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Service</th>
                                        <th>Project Details</th>
                                        <th className="pl-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        serviceList.map((service, i) => <DisplayCustomerService key={i} service={service} ></DisplayCustomerService>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdminControlServices;