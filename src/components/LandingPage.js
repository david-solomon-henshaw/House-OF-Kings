import React from 'react'
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import alterationPng from '../assets/images/alterations.png'
import WearTypes from './WearsTypes';
import New from './New';
import TailoringProcess from './Process';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      {/* <CallToAction /> */}
      <TailoringProcess />

      <section className="about-section py-5 bg-light">
        <div className="container">




        
          <div className="row" style={{margin: "20px 0", border: "solid black 1px"}}
 >
            <div   className="col-md-6 order-md-2 d-flex align-items-center">
              <div style={{ margin: "15px 0 0"}}>
                <h2>Alterations</h2>
                <p>
                  Our experts ensure that your dress seamlessly fits you, making the
                  necessary adjustments to suit your individual needs.
                </p>
              </div>
            </div>
            <div   className="col-md-6 order-md-1 d-flex align-items-center">
              <img
                src="https://images.pexels.com/photos/6766284/pexels-photo-6766284.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Bespoke Bridal"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row" style={{margin: "20px 0", border: "solid black 2px"}}
 >
            <div   className="col-md-6 order-md-2 d-flex align-items-center">
              <img
                src="https:images.pexels.com/photos/6766375/pexels-photo-6766375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bespoke Bridal"
                className="img-fluid"
              />
            </div>
            <div   className="col-md-6 order-md-1 d-flex align-items-center">
              <div style={{ margin: "15px 0 0"}}>
                <h2>Design</h2>
                <p>
                  From sketch to final product, we guide you through the process of
                  crafting the perfect gown that reflects your personality.
                </p>
              </div>
            </div>
          </div>


          <div className="row" style={{margin: "20px 0", border: "solid black 2px"}}
 >
            <div   className="col-md-6 order-md-2 d-flex align-items-center">
              <img
                src="https://images.pexels.com/photos/6766387/pexels-photo-6766387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Bespoke Bridal"
                className="img-fluid"
              />
            </div>
            <div   className="col-md-6 order-md-1 d-flex align-items-center">
              <div style={{ margin: "15px 0 0"}}>
                <h2>Consulting</h2>
                <p>
                  We’re here to assist you with any special requests or concerns,
                  from fabric choices to dress style inspirations.
                </p>
              </div>
            </div>
          </div>





          <div className="row" style={{margin: "20px 0", border: "solid black 2px"}}
 >
            <div   className="col-md-6 order-md-2 d-flex align-items-center">
              <div style={{ margin: "15px 0 0"}}>
                <h2>Our Story</h2>
                <p>
                  Megan Kenny’s love for quality tailoring has led her to explore
                  the fascinating charm and glamour of bridal wear. After more than
                  20 years in the business, her passion and creativity continue to
                  blossom.
                </p>
                <p>
                  <a href="/learn-more">LEARN MORE</a>
                </p>
              </div>
            </div>
            <div   className="col-md-6 order-md-1 d-flex align-items-center">
              <img
                src="https://images.pexels.com/photos/6614830/pexels-photo-6614830.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Bespoke Bridal"
                className="img-fluid"
              />
            </div>
          </div>


          <div className="row" style={{margin: "20px 0", border: "solid black 2px"}}
 >
            <div   className="col-md-6 order-md-2 d-flex align-items-center">
              <img
                src="https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Bespoke Bridal"
                className="img-fluid"
              />
            </div>
            <div   className="col-md-6 order-md-1 d-flex align-items-center">
              <div>

                <h2>Our Services</h2>
                <p>
                  Our services include bespoke creations that embody the character
                  and spirit of our brides, as well as alterations to ensure a
                  perfect fit.
                </p>
                <p>
                  <a href="/learn-more">LEARN MORE</a>
                </p>              </div>
            </div>
          </div>


        </div>
      </section>

      {/* <New /> */}



    </div>
  )
}

export default LandingPage

