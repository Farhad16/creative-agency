import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                        <p className="orderTitle font-weight-bold">Service List</p>
                        <p className="customerName">Customer Name</p>
                    </nav>

                    <div className="customerList p-3 pb-5 h-100">
                        <form action="">
                            <div className="bg-white m-3 p-5">
                                <label htmlFor="" className="mb-3">
                                    Service Title <br />
                                    <input type="text" placeholder="Enter title" className="addServiceInput titleInput pl-2 mt-2 mr-5" /><br />
                                </label>
                                <label for="file-upload" class="custom-file-upload">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} /> <span>Upload Image</span>
                                </label> <br />
                                <input id="file-upload" type="file" />

                                <label htmlFor="">
                                    Description <br />
                                    <input type="text" placeholder="Enter description" className="addServiceInput decription-padding pl-2 mb-3" /><br />
                                </label>
                            </div>
                            <button className="btn btn-success btn-submit mr-3 mb-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddService;