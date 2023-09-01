import React from 'react';
import { FaUser, FaCog, FaRuler, FaCheck } from 'react-icons/fa';

const TailoringProcess = () => {
  return (
    <div className="tailoring-process">
      <h2 className="process-heading">THE PROCESS</h2>
      <div className="steps-container">
        <div className="step" style={{ textAlign: "center"}}>
          <FaUser className="icon" style={{margin: '20px', fontSize: "30px"}} />
          <h5>MEET YOUR TAILOR</h5>
          <p>
            Visit our London showroom and meet one of our expert personal
            tailors who will guide you through a collection of over 6000 cloths
            from the most prestigious British and Italian mills.
          </p>
        </div>
        <div className="step" style={{ textAlign: "center"}}>
          <FaCog className="icon" style={{margin: '20px', fontSize: "30px"}} />
          <h5 style={{ textAlign: "center"}}>SELECT YOUR STYLE</h5>
          <p>
            Discuss your needs and requirements with our tailors to style the
            garment completely to your taste. Everything from the cut and
            lining, to the buttons and embroidery is chosen by you.
          </p>
        </div>
        <div className="step" style={{ textAlign: "center"}}>
          <FaRuler className="icon" style={{margin: '20px', fontSize: "30px"}} />
          <h5>GET MEASURED</h5>
          <p>
            In just 10 seconds our 3D body scanner takes thousands of precise
            body measurements without the need for numerous and time-consuming
            fittings.
          </p>
        </div>
        <div className="step" style={{ textAlign: "center"}}>
          <FaCheck className="icon" style={{margin: '20px', fontSize: "30px"}} />
          <h5>FITTING</h5>
          <p>
            Garments are now crafted in a matter of weeks, at which point you
            will be invited back in-store for a fitting. If any minor tweaks
            are needed then these are done within a few days at our London
            workshop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TailoringProcess;
