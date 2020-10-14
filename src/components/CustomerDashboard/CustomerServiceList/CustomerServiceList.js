import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

import webDesign from '../../images/icons/webDesign.png'
import webDevelopment from '../../images/icons/webDevelop.png'
import graphics from '../../images/icons/graphics.png'
import DisplayCustomeServices from '../DisplayCustomeServices/DisplayCustomeServices';


const CustomerServiceList = () => {
    const serviceData = [
        {
            name: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product',
            img: webDesign
        },
        {
            name: 'Graphic design',
            description: 'Amazing flyers social media post and brand representation that would make your brand stand out',
            img: graphics
        },
        {
            name: 'Web Development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general',
            img: webDevelopment
        }
    ];



    return (
        <div className="rightSide">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <nav className="navbar mr-auto d-flex justify-content-between">
                        <p className="orderTitle">Order List</p>
                        <p className="customerName">Customer Name</p>
                    </nav>
                    <div className="order-form">
                        <div className="pb-5">
                            <div className="row p-5">
                                {
                                    serviceData.map((service, i) => <DisplayCustomeServices key={i} service={service}></DisplayCustomeServices>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerServiceList;