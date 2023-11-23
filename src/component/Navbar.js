import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    return(
        <div className="navbar1">
            <nav class="navbar navbar-expand-sm" id="nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> SoftTech </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                    <NavLink to="/" className='link'>Home</NavLink>                             
                            </li>
                            <li class="nav-item">
                                    <NavLink to="/about" className='link'>About</NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                    <NavLink to="/services" className='link'>Services</NavLink>
                            </li>
                            <li class="nav-item">
                                    <NavLink to="/contact" className='link'>Contact</NavLink>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );   
}
export default Navbar;