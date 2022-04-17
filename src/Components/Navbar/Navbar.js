import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    let activeStyle = {
        borderBottom: '2px solid orange'
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fs-4 p-4 m-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            className="nav-link " aria-current="page" to='/'>Home</NavLink>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-link" to="/services">Services</NavLink>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            className="nav-link" to="/blogs">Blogs</NavLink>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                            className="nav-link" to="/about">About Me</NavLink>
                    </div>
                </div>
            </div>
            <Link to='/login'>Sign in</Link>
        </nav>
    );
};

export default Navbar;