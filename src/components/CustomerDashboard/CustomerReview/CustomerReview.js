import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const CustomerReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (data, e) => {
        fetch('http://localhost:5000/addFeedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        }).then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Feedback added successfully");
                    e.target.reset();
                }
            })
    }

    return (
        <div className="rightSide">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <nav className="navbar mr-auto d-flex justify-content-between">
                        <p className="orderTitle">Review</p>
                        <p className="customerName">{loggedInUser.displayName}</p>
                    </nav>
                    <div className="order-form">
                        <div className="pb-5">
                            <div className="row p-5">
                                <div className="col-md-8">
                                    <form action="" onSubmit={handleSubmit(onSubmit)} >
                                        <input type="text" name="name" placeholder="Your name" ref={register({ required: true })} className="input-field pl-3 mb-3" /><br />
                                        {errors.name && <small className="text-danger">This field is required</small>}
                                        <input type="text" name="designation" placeholder="Company name. Designation" ref={register({ required: true })} className="input-field pl-3 mb-3" /><br />
                                        {errors.designation && <small className="text-danger">This field is required</small>}
                                        <input type="text" name="description" placeholder="Description" ref={register({ required: true })} className="input-field project pl-3 mb-3" /><br />
                                        {errors.description && <small className="text-danger">This field is required</small>} <br />
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