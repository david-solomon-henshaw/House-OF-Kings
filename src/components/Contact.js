

import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  
  return (
    <div className="container " style={{height: "60svh", marginTop: "100px",marginBottom: "150px", padding: '50px'}}>
      <h2 className="text-center mt-5" style={{color: "#c19c3e", fontWeight: "900", backgroundColor: '#673a87', textDecoration: 'underline' }}>Contact Us</h2>
      <div className="d-flex justify-content-center " style={{backgroundColor: "#673a87",marginTop: "12px", padding: "5px"}}>
        <div className="col-md-6 col-12" style={{backgroundColor: "#673a87", }}> 
          <form onSubmit={handleSubmit} style={{backgroundColor: '#673a87',  }}>
            <div className="mb-3">
              <label style={{color: "#c19c3e", fontWeight: "900" }} htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label style={{color: "#c19c3e", fontWeight: "900" }} htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label style={{color: "#c19c3e", fontWeight: "900" }} htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button style={{ width: '100%' }} type="submit" className="btn ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
