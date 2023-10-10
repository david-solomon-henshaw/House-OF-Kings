import React from 'react';
import { FaUser, FaCog, FaRuler, FaCheck } from 'react-icons/fa';

const TailoringProcess = () => {
  return (
    <div className="tailoring-process" style={{ marginTop: "90px" }}>
    <h2 style={{ fontWeight: "900", textDecoration: "underline", color: "#c19c3e", backgroundColor: "#673a87", padding: "20px" }} className="process-heading mb-5">THE PROCESS</h2>
    <div className="steps-container">
      <div className="step" style={{ textAlign: "center" }}>
        <FaUser className="icon" style={{ margin: '20px', fontSize: "30px" }} />
        <h5>MEET YOUR TAILOR</h5>
        <p>
          Visit our showroom in Lagos and meet one of our expert personal tailors who will guide you through a collection of over 6000 fabrics from prestigious Nigerian and international mills.
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
        <h5>GET MEASURED</h5>
        <p>
          Our skilled tailors will take precise measurements to ensure a perfect fit for your garment.
        </p>
      </div>
      <div className="step" style={{ textAlign: "center" }}>
        <FaCheck className="icon" style={{ margin: '20px', fontSize: "30px" }} />
        <h5>FITTING</h5>
        <p>
          Garments are now crafted in a matter of weeks, at which point you will be invited back in-store for a fitting. If any minor adjustments are needed, we can take care of them at our Lagos workshop.
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default TailoringProcess;
