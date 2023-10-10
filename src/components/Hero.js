import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-bootstrap/Carousel';
import carosel_1 from '../assets/images/clipboard.jpg';
import carosel_2 from '../assets/images/clipboard_2(1).jpg';
import carosel_3 from '../assets/images/clipboard3.jpg';
import carosel_4 from '../assets/images/clipboard4.jpg';





const Hero = () => {
  return (

    <Carousel>
    <Carousel.Item>
      <div className="carousel-slide">
        <img
          src = {carosel_1}
          alt="Image 1"
        />
        <div className="carousel-text">
          <p>Elevate Your Style with Tailor-Made Elegance</p>
          <a className="book-appointment-button" href="/contact">
            Book An Appointment
          </a>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="carousel-slide">
        <img
          src={carosel_3}
          alt="Image 3"
        />
        <div className="carousel-text">
          <p>Discover the Artistry of Bespoke Tailoring</p>
          <a className="book-appointment-button" href="/contact">
            Book An Appointment
          </a>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="carousel-slide">
        <img
          src={carosel_2}
          alt="Image 2"
        />
        <div className="carousel-text">
          <p>Crafting Timeless Attire Just for You</p>
          <a className="book-appointment-button" href="/contact">
            Book An Appointment
          </a>
        </div>
      </div>
    </Carousel.Item>
  
    <Carousel.Item>
      <div className="carousel-slide">
        <img
          src={carosel_4}
          alt="Image 3"
        />
        <div className="carousel-text">
          <p>Discover the Artistry of Bespoke Tailoring</p>
          <a className="book-appointment-button" href="/contact">
            Book An Appointment
          </a>
        </div>
      </div>
    </Carousel.Item>
 
  </Carousel>
  );
};

export default Hero;


