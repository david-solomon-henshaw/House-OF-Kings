

import React from 'react';
import { FaUser, FaCog, FaRuler, FaGlobe } from 'react-icons/fa';
import { FaIndustry, FaUserTie } from 'react-icons/fa';  // Updated icons

const TailoringProcess = () => {
  return (
    <div className="tailoring-process" style={{ marginTop: "90px" }}>
      <h2 style={{ fontWeight: "900", textDecoration: "underline", color: "#c19c3e", backgroundColor: "#673a87", padding: "20px" }} className="process-heading mb-5">THE PROCESS</h2>
      <div className="steps-container">
        <div className="step" style={{ textAlign: "center" }}>
          <FaUser className="icon" style={{ margin: '20px', fontSize: "30px" }} />
          <h5>MEET YOUR TAILOR</h5>
          <p>
            Arrange a meeting with one of our expert personal tailors at a location of your choice. They will guide you through a collection of over 6000 fabrics from prestigious Nigerian and international mills.
          </p>
        </div>
        <div className="step" style={{ textAlign: "center" }}>
          <FaCog className="icon" style={{ margin: '20px', fontSize: "30px" }} />
          <h5 style={{ textAlign: "center" }}>SELECT YOUR STYLE</h5>
          <p>
            Discuss your needs and requirements with our tailors to customize the garment completely to your taste. Everything from the cut and design, to the buttons and embroidery, is chosen by you.
          </p>
        </div>
        <div className="step" style={{ textAlign: "center" }}>
          <FaRuler className="icon" style={{ margin: '20px', fontSize: "30px" }} />
          <h5>IN-PERSON MEASUREMENTS</h5>
          <p>
            Our skilled tailors will take precise measurements at the location where you meet them. This ensures a perfect fit for your garment, and it's ideal for customers who prefer in-person interactions.
          </p>
        </div>
        <div className="step" style={{ textAlign: "center" }}>
          <FaGlobe className="icon" style={{ margin: '20px', fontSize: "30px" }} />
          <h5>REMOTE MEASUREMENTS</h5>
          <p>
            Our skilled tailors will guide you on how to take precise measurements at your location. We'll ensure a perfect fit for your garment, even if you're abroad.
          </p>
        </div>
      </div>
      <div className="tailoring-process" style={{ marginTop: "90px" }}>
      <h2 style={{ fontWeight: "900", textDecoration: "underline", color: "#c19c3e", backgroundColor: "#673a87", padding: "20px" }} className="process-heading mb-5">OUR SERVICES</h2>
      <div className="steps-container">
        <div className="step" style={{ textAlign: "center" }}>
          <FaIndustry className="icon" style={{ margin: '20px', fontSize: "30px" }} />
          <h5>Bulk Sewing Services</h5>
          <p>
            We offer bulk sewing services for businesses and organizations.
            {/* Add more details and components specific to bulk sewing here */}
          </p>
        </div>
        <div className="step" style={{ textAlign: "center" }}>
          <FaUserTie className="icon" style={{ margin: '20px', fontSize: "30px" }} />
          <h5>Individual Sewing Services</h5>
          <p>
            Our expert tailors provide individual sewing services for custom garments.
            {/* Add more details and components specific to individual sewing here */}
          </p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default TailoringProcess;



