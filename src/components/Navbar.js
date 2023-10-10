
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import hok_logo from '../assets/images/Logo_Hok.png'
const Navbar = () => {
  return (
    <nav  className="navbar navbar-expand-lg navbar-light bg-light p-3 fixed-top" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={hok_logo} className='logo' />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link mx-2" exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/about" activeClassName="active-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/services" activeClassName="active-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link mx-2 dropdown-toggle"
                to="/catalogue"
                id="catalogueDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Catalogue
              </Link>
              <div className="dropdown-menu" aria-labelledby="catalogueDropdown">
               <NavLink className="dropdown-item" to="/catalogue/agbada" activeClassName="active-link">
              Agbada
                </NavLink>
               <NavLink className="dropdown-item" to="/catalogue/white/wedding" activeClassName="active-link">
              White Wedding
                </NavLink>
                <NavLink className="dropdown-item" to="/catalogue/kaftan" activeClassName="active-link">
                 Kaftan
                </NavLink>
              
                <NavLink className="dropdown-item" to="/catalogue/traditional_wedding" activeClassName="active-link">
                  Traditional Wedding
                </NavLink>
                <NavLink className="dropdown-item" to="/catalogue/suits" activeClassName="active-link">
                  Suits
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/contact" activeClassName="active-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
