import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavSection.css'
import logo from '../../images/logos/logo.png'
import { UserContext } from '../../../App';

const NavSection = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="ml-5">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand ml-5" to="/"><img src={logo} alt="" width="150px" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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
                        {loggedInUser.displayName ?
                            <li className="nav-item">
                                <Link className="nav-link mr-5" to="#" onClick={() => { setLoggedInUser({}); sessionStorage.clear() }}>Logout</Link>
                            </li>
                            :

                            <li className="nav-item">
                                <Link className="nav-link mr-5 " to="/login">Login</Link>
                            </li>


                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavSection;