import React from 'react'
import VideoPlayer from './Video'
import caro from '../assets/images/carosel1.jpg'
const About = () => {
  return (
    <div>
      {/* <VideoPlayer /> */}

      <div className="">
        <div className="row">
          <div className="col-md-6 order-md-2 d-flex align-items-center">
            <img
              src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Bespoke Bridal"
              className="img-fluid h-100"
            />
          </div>
          <div className="col-md-6 order-md-1 d-flex align-items-center">
            <div style={{margin: "20px"}}>
              <h2>Who We Are</h2>
              <p >
                Megan Kenny, owner and designer of Kenny & Harlow, had a passion for design and sewing that began at a very young age when she first stepped on the pedals of her grandmother’s sewing machine. Clearly understanding her vision in life, she left school early to travel around the world and learn about the wonders of the sewing industry. She returned home from London in 1985 and opened a dressmaking and alterations store in Parnell. Word of her passion, skill, and excellent relationships with her clients spread rapidly, making her business thrive and gaining the trust of many. The team explored made-to-measure gowns created to perfection, leading her to open her own bridal gown label, Kenny & Harlow. This brand takes inspiration from her close relationships with her grandmother and granddaughter. And as they say, the rest is history. </p>
            </div>
          </div>
        </div>





        <div className="row">
          <div className="col-md-6 order-md-2 d-flex align-items-center">
            <div style={{margin: "20px"}}>
              <h2>Why Us</h2>
              <p>
                Discover perfection in every stitch at [Your Company Name]. Choose us as your dedicated sewing partner and experience clothing craftsmanship at its finest.
              </p>

            </div>
          </div>
          <div className="col-md-6 order-md-1 d-flex align-items-center">
            <img
              src="https://kennyandharlow.co.nz/wp-content/uploads/bg-what-we-do.jpg"
              alt="Bespoke Bridal"
              className="img-fluid h-100"
            />
          </div>



        </div>
        </div>
        </div>

        )
}

        export default About