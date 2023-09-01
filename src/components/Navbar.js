import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    // <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-3">
	//     <div className="container-fluid">
	//       <Link className="navbar-brand" to ="">Zazi Acebreed</Link>
	//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	//         <span className="navbar-toggler-icon"></span>
	//       </button>
	    
	//       <div className=" collapse navbar-collapse" id="navbarNavDropdown">
	//         <ul className="navbar-nav ms-auto ">
	//           <li className="nav-item">
	//             <Link className="nav-link mx-2 active" aria-current="page" to ="/">Home</Link>
	//           </li>
	//           <li className="nav-item">
	//             <Link className="nav-link mx-2" to="/about">About Us</Link>
	//           </li>
	//           <li className="nav-item">
	//             <Link className="nav-link mx-2" to="/catalogue">Catalogue</Link>
	//           </li>
    //           <li className="nav-item">
	//             <Link className="nav-link mx-2" to="/contact">Contact Us</Link>
	//           </li>
	         
	//         </ul>
	//       </div>
	//     </div>
	//     </nav>

          <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Zazi Acebreed
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
                    <NavLink className="nav-link mx-2" exact to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link mx-2" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link mx-2 dropdown-toggle"
                      href="/catalogue"
                      id="catalogueDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Catalogue
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="catalogueDropdown"
                    >
                      <Link className="dropdown-item" to="/catalogue/traditionalattire">
                        Native Attire
                      </Link>
                      <Link className="dropdown-item" to="/catalogue/officewears">
                        Office Wears
                      </Link>
                      <Link className="dropdown-item" to="/catalogue/childrensclothing">
                        Children Wears
                      </Link>
                      <Link className="dropdown-item" to="/catalogue/wedding">
                        Grooms Wedding
                      </Link>
                      <Link className="dropdown-item" to="/catalogue/casual">
                        Casual
                      </Link>
                      <Link className="dropdown-item" to="/catalogue/corporate">
                        Corporate
                      </Link>
                      <Link className="dropdown-item" to="/catalogue/uniform">
                        Uniform
                      </Link>
                      <Link className="dropdown-item" to="/catalogue/sportswear">
                        Sportwears
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link mx-2" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  );
};

export default Navbar