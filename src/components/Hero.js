import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carosel_1 from '../assets/images/carosel1.jpg';
import carosel_2 from '../assets/images/carosel2.jpg';
import carosel_3 from '../assets/images/carosel3.jpg';

const Hero = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={5000} // Set the auto-slide interval in milliseconds (e.g., 5 seconds)
      showThumbs={false} // Hide thumbnail navigation
      showStatus={false} // Hide status indicator
      showArrows={false} // Hide next and previous buttons
      stopOnHover={false} // Do not pause on hover
      className="carousel"
    >
      <div className="carousel-slide">
        <img src={carosel_1} alt="Image 1" />
        <div className="carousel-text">
          <p>Elevate Your Style with Tailor-Made Elegance</p>
          <a
            className="book-appointment-button"
            href="https://tailormadelondon.as.me/?appointmentType=category:Shoreditch%20Store"
          >
            Book An Appointment
          </a>
        </div>
      </div>
      <div className="carousel-slide">
        <img src={carosel_2} alt="Image 2" />
        <div className="carousel-text">
          <p>Crafting Timeless Attire Just for You</p>
          <a
            className="book-appointment-button"
            href="https://tailormadelondon.as.me/?appointmentType=category:Shoreditch%20Store"
          >
            Book An Appointment
          </a>
        </div>
      </div>
      <div className="carousel-slide">
        <img src={carosel_3} alt="Image 3" />
        <div className="carousel-text">
          <p>Discover the Artistry of Bespoke Tailoring</p>
          <a
            className="book-appointment-button"
            href="https://tailormadelondon.as.me/?appointmentType=category:Shoreditch%20Store"
          >
            Book An Appointment
          </a>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
