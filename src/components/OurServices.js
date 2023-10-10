import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const OurServices = () => {
  return (

    <section className="about-section py-5 mt-5">
    <div className="container">
      <div className="row" style={{ "backgroundColor": "#673a87", margin: "20px 0", border: "solid #c19c3e 2px", color: "white", fontWeight: "bolder"  }}>
        <div className="col-md-6 order-md-2 d-flex align-items-center">
          <div style={{ margin: "15px 0 0" }}>
            <h2 style={{ color: "#c19c3e", textDecoration: "underline", fontWeight: 900 }}>Alterations</h2>
            <p>
              Our experts ensure that your dress seamlessly fits you, making the
              necessary adjustments to suit your individual needs.
            </p>
            <Link to='/contact' >
                <button className="btn" style={{fontWeight: "bolder"}}>
                  Contact Us <FaArrowRight style={{ margin: "5px" }} />
                </button>
              </Link>
          </div>
        </div>
        <div className="col-md-6 order-md-1 d-flex align-items-center mt-3">
          <img
            src="https://images.pexels.com/photos/6766284/pexels-photo-6766284.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Bespoke Bridal"
            className="img-fluid"
          />
        </div>
      </div>
  
      <div className="row" style={{ "backgroundColor": "#673a87", margin: "20px 0", border: "solid #c19c3e 2px", color: "white" , fontWeight: "bolder"}}>
        <div className="col-md-6 order-md-2 d-flex align-items-center">
          <img
            src="https://s3.amazonaws.com/hive-and-colony/blog/xl/the-importance-of-accurate-measurements-in-tailoring.jpg"
            alt="Bespoke Bridal"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 order-md-1 d-flex align-items-center mb-3">
          <div style={{ margin: "15px 0 0" }}>
            <h2 style={{ color: "#c19c3e", textDecoration: "underline", fontWeight: 900 }} >Design</h2>
            <p>
              From sketch to final product, we guide you through the process of
              crafting the perfect outfit that reflects your personality.
            </p>
            <Link to='/contact' >
                <button className="btn" style={{fontWeight: "bolder"}}>
                  Contact Us <FaArrowRight style={{ margin: "5px" }} />
                </button>
              </Link>
          </div>
        </div>
      </div>
  
      <div className="row" style={{"backgroundColor": "#673a87",  margin: "20px 0", border: "solid #c19c3e 2px", color: "white" , fontWeight: "bolder"}}>
        <div className="col-md-6 order-md-2 d-flex align-items-center">
          <img
            src="https://images.pexels.com/photos/6766387/pexels-photo-6766387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Bespoke Bridal"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 order-md-1 d-flex align-items-center">
          <div style={{ margin: "15px 0 0" }}>
            <h2 style={{ color: "#c19c3e", textDecoration: "underline", fontWeight: 900 }}>Consulting</h2>
            <p>
              We’re here to assist you with any special requests or concerns,
              from fabric choices to dress style inspirations.
            </p>
            <p>
              <Link to='/contact' >
                <button className="btn" style={{fontWeight: "bolder"}}>
                  Contact Us <FaArrowRight style={{ margin: "5px" }} />
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
  
      <div className="row" style={{"backgroundColor": "#673a87",  margin: "20px 0", border: "solid #c19c3e 2px", color: "white" , fontWeight: "bolder"}}>
        <div className="col-md-6 order-md-2 d-flex align-items-center">
          <div style={{ margin: "15px 0 0" }}>
            <h2 style={{ color: "#c19c3e" , textDecoration: "underline", fontWeight: 900 }}>Our Story</h2>
            <p>
              At Kings Creations, our story is more than just threads and fabric—it's an inspiring tale of passion, resilience, and the pursuit of sartorial excellence. From our humble beginnings as underdogs in the world of tailoring to our unwavering love for crafting exceptional clothing, every stitch in our journey tells a unique story. Join us in unraveling the extraordinary narrative behind Kings Creations.
            </p>
            <p>
              <Link to='/about' >
                <button className="btn" style={{fontWeight: "bolder"}}>
                  Learn More <FaArrowRight style={{ margin: "5px" }} />
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 order-md-1 d-flex align-items-center">
          <img
            src="https://images.pexels.com/photos/6614830/pexels-photo-6614830.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Bespoke Bridal"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
  

  )
}

export default OurServices