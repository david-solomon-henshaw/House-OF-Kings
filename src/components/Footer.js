import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return ( 
    // <footer  style={{"backgroundColor": "#673a87"}} className="bg-light text-dark custom-padding">
    // <footer  style={{"backgroundColor": "#673a87", color: "#c19c3e", fontWeight: "900"}} className=" custom-padding">
  
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-4">
    //         <h5 style={{"color": " #c19c3e"}}>Contact Us</h5>
    //         <address>
    //           <p>
    //             Address: 11, Olorunlogbon Street,Anthony Village, Lagos, Nigeria
    //           </p>
    //           <p>Email: Houseofkingscreations@gmail.com</p>
    //           <p>Phone: +(234) 806 289 8151</p>
    //         </address>
    //       </div>
    //       <div className="col-md-4">
    //         <h5 style={{"color": " #c19c3e"}}>Quick Links</h5>
    //         <ul className="list-unstyled">
    //           <li>
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li>
    //             <Link to="/about">About Us</Link>
    //           </li>
    //           <li>
    //             <Link to="/catalogue">Catalogue</Link>
    //           </li>
    //           <li>
    //             <Link to="/contact">Contact Us</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-md-4">
    //         <h5 style={{"color": " #c19c3e"}}>Connect With Us</h5>
    //         <ul className="list-inline">
    //           <li className="list-inline-item">
    //             <Link to="https://www.facebook.com/HouseofKingsNG/">
    //               <FaFacebook className="text-primary" />
    //             </Link>
    //           </li>
    //           <li className="list-inline-item">
    //             <Link to="#">
    //               <FaTwitter className="text-info" />
    //             </Link>
    //           </li>
    //           <li className="list-inline-item">
    //             <Link to="#">
    //               <FaInstagram className="text-danger" />
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="text-center py-3">
    //     <p>&copy; 2023 Your Tailor Website. All Rights Reserved.</p>
    //   </div>
    // </footer>
    <footer style={{ "backgroundColor": "#673a87", color: "#c19c3e", fontWeight: "900" }} className="custom-padding">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h5 style={{ "color": " #c19c3e" }}>Contact Us</h5>
        <address>
          <p>
            Address: 11, Olorunlogbon Street, Anthony Village, Lagos, Nigeria
          </p>
          <p>Email: Houseofkingscreations@gmail.com</p>
          <p>Phone: +(234) 806 289 8151</p>
        </address>
      </div>
      <div className="col-md-4">
        <h5 style={{ "color": " #c19c3e" }}>Quick Links</h5>
        <ul className="list-unstyled custom-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5 style={{ "color": "#c19c3e" }}>Connect With Us</h5>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="https://www.facebook.com/HouseofKingsNG/" className="custom-link">
              <FaFacebook className="text-primary" />
            </Link>
          </li>
          {/* <li className="list-inline-item">
            <Link to="#" className="custom-link">
              <FaTwitter className="text-info" />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="custom-link">
              <FaInstagram className="text-danger" />
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
  <div className="text-center py-3">
    <p>&copy; 2023 DSH. All Rights Reserved.</p>
  </div>
</footer>

  );
};

export default Footer;
