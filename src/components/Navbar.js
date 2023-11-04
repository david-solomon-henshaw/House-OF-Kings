
import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import hok_logo from '../assets/images/Logo_Hok.png'
const Navbar = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => setOffcanvasOpen(!offcanvasOpen);

  return (

    <nav className="navbar navbar-light navbar-expand-md bg-light p-3 fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={hok_logo} className="logo" alt="house of kings creations logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleOffcanvas}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>

    {/* Offcanvas */}
    <div
      className={`offcanvas offcanvas-end ${offcanvasOpen ? 'show' : ''}`}
      tabIndex="-1"
      id="offcanvasNavbar"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Menu</h5>
        <button
          type="button"
          className="btn-close"
          onClick={toggleOffcanvas}
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              activeClassName="active-link"
              onClick={toggleOffcanvas}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about"
              activeClassName="active-link"
              onClick={toggleOffcanvas}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/services"
              activeClassName="active-link"
              onClick={toggleOffcanvas}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/catalogue"
              role="button"
              data-bs-toggle="dropdown"
            >
              Catalogue
            </Link>
            <div className="dropdown-menu">
              <Link
                className="dropdown-item"
                to="/catalogue/agbada"
                onClick={toggleOffcanvas}
              >
                Agbada
              </Link>
              <Link
                className="dropdown-item"
                to="/catalogue/white/wedding"
                onClick={toggleOffcanvas}
              >
                White Wedding
              </Link>
              <Link
                className="dropdown-item"
                to="/catalogue/kaftan"
                onClick={toggleOffcanvas}
              >
                Kaftan
              </Link>
              <Link
                className="dropdown-item"
                to="/catalogue/traditional_wedding"
                onClick={toggleOffcanvas}
              >
                Traditional Wedding
              </Link>
              <Link
                className="dropdown-item"
                to="/catalogue/suits"
                onClick={toggleOffcanvas}
              >
                Suits
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contact"
              activeClassName="active-link"
              onClick={toggleOffcanvas}
            >
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
