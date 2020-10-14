import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListAlt, faHdd, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logos/logo.png'

const Sidebar = () => {

    const location = useLocation();

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [isDoctor, setIsDoctor] = useState(false);

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])

    return (
        <aside className="sidebar d-flex flex-column justify-content-between py-2 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-dark sidebar-logo">
                        <img src={logo} alt="" width="150px" />
                    </Link>
                </li>
                {/* <li>
                    <Link to="/customer/order"
                        className={location.pathname === "/customer/order" ? "text-dark pl-3 active" : "text-dark pl-3"}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customer/service"
                        className={location.pathname === "/customer/service" ? "text-dark pl-3 active" : "text-dark pl-3"}
                    >
                        <FontAwesomeIcon icon={faHdd} /> <span>Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customer/review"
                        className={location.pathname === "/customer/review" ? "text-dark pl-3 active" : "text-dark pl-3"}
                    >
                        <FontAwesomeIcon icon={faListAlt} /> <span>Review</span>
                    </Link>
                </li> */}
                {/* {isDoctor && <div> */}

                <li>
                    <Link to="/admin/controlService"
                        className={location.pathname === "/admin/controlService" ? "text-dark pl-3 active" : "text-dark pl-3"}
                    >
                        <FontAwesomeIcon icon={faHdd} /> <span>Service list</span>
                    </Link>
                </li>

                <li>
                    <Link to="/admin/addService"
                        className={location.pathname === "/admin/addService" ? "text-dark pl-3 active" : "text-dark pl-3"}
                    >
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>

                <li>
                    <Link to="/admin/makeAdmin"
                        className={location.pathname === "/admin/makeAdmin" ? "text-dark pl-3 active" : "text-dark pl-3"}
                    >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;