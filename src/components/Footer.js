import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-dark custom-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              <p>
                Address: 123 Tailor Street,
                <br />
                Tailorville, TAIL123
              </p>
              <p>Email: info@yourtailorwebsite.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/catalogue">Catalogue</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <FaFacebook className="text-primary" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaTwitter className="text-info" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaInstagram className="text-danger" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p>&copy; 2023 Your Tailor Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
