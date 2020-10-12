import React from 'react';
import { Link } from 'react-router-dom';
import './NavSection.css'


const NavSection = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="#">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="#">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 " to="#">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavSection;