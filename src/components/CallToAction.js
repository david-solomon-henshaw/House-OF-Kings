import React from 'react'
import carosel from '../assets/images/carosel1.jpg'
import { FaThumbsUp, FaTape, FaRuler, FaCheck } from 'react-icons/fa';
const CallToAction = () => {
    return (
        <div className="quality-assurance-container container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className="card qa-card card-1 text-center bg-white">
              <div className="card-body">
                <FaThumbsUp className="icon thumbs-up" /> {/* Add a custom class for styling */}
                <h5 className="card-title">Masterful Craftsmanship</h5>
                <p className="card-text">Our skilled artisans meticulously craft each garment with impeccable stitching and exquisite details.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card qa-card card-2 text-center bg-white">
              <div className="card-body">
                <FaTape className="icon tape" /> {/* Add a custom class for styling */}
                <h5 className="card-title">Finest Material Curation</h5>
                <p className="card-text">We source premium fabrics and materials to ensure durability, comfort, and an elegant look.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card qa-card card-3 text-center bg-white">
              <div className="card-body">
                <FaRuler className="icon ruler" /> {/* Add a custom class for styling */}
                <h5 className="card-title">Precise Tailoring</h5>
                <p className="card-text">Accurate measurements and advanced techniques create garments that fit flawlessly and comfortably.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card qa-card card-4 text-center bg-white">
              <div className="card-body">
                <FaCheck className="icon check" /> {/* Add a custom class for styling */}
                <h5 className="card-title">Stringent Quality Checks</h5>
                <p className="card-text">Thorough inspections focus on stitching, alignment, fabric integrity, and overall quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
       )
}

export default CallToAction