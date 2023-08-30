import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-3">
	    <div className="container-fluid">
	      <Link className="navbar-brand" to ="">Zazi Acebreed</Link>
	      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="navbar-toggler-icon"></span>
	      </button>
	    
	      <div className=" collapse navbar-collapse" id="navbarNavDropdown">
	        <ul className="navbar-nav ms-auto ">
	          <li className="nav-item">
	            <Link className="nav-link mx-2 active" aria-current="page" to ="/">Home</Link>
	          </li>
	          <li className="nav-item">
	            <Link className="nav-link mx-2" to="/about">About Us</Link>
	          </li>
	          <li className="nav-item">
	            <Link className="nav-link mx-2" to="/catalogue">Catalogue</Link>
	          </li>
              <li className="nav-item">
	            <Link className="nav-link mx-2" to="/contact">Contact Us</Link>
	          </li>
	         
	        </ul>
	      </div>
	    </div>
	    </nav>
  )
}

export default Navbar