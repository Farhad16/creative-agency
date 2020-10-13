import React from 'react';
import './HeaderMain.css'
import frame from '../../images/logos/Frame.png'
import { Link } from 'react-router-dom';


const HeaderMain = () => {
    return (
        <section style={{ height: '500px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="fontBold">Let's Grow Your<br /> Brand To The <br />Next Level</h1>
                <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat temporibus laboriosam ratione, quidem accusamus aperiam!
                </p>
                <Link to="/appointment"><button className="btn text-brand my-3">Hire us</button></Link>
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid" />
            </div>
        </section>
    );
};

export default HeaderMain;