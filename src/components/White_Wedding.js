

import React from 'react'
import carosel_wedding_3 from '../assets/images/white_wedding/3.jpg';
import carosel_wedding_4 from '../assets/images/white_wedding/4.jpg';
import carosel_wedding_5 from '../assets/images/white_wedding/5.jpg';
import carosel_wedding_6 from '../assets/images/white_wedding/6.jpg';
import carosel_wedding_7 from '../assets/images/white_wedding/7.jpg';
import carosel_wedding_11 from '../assets/images/white_wedding/11.jpg';
import carosel_wedding_12 from '../assets/images/white_wedding/12.jpg';
import carosel_wedding_14 from '../assets/images/white_wedding/14.jpg';
import carosel_wedding_16 from '../assets/images/white_wedding/16.jpg';
import carosel_wedding_20 from '../assets/images/white_wedding/20.jpg';
import carosel_wedding_22 from '../assets/images/white_wedding/22.jpg';
import carosel_wedding_24 from '../assets/images/white_wedding/24.jpg';


const White_Wedding = () => {


  const originalImages = [
      carosel_wedding_3,
      carosel_wedding_4,
      carosel_wedding_5,
      carosel_wedding_6,
      carosel_wedding_7,
      carosel_wedding_11,
      carosel_wedding_12,
      carosel_wedding_14,
      carosel_wedding_16,
      carosel_wedding_20,
      carosel_wedding_22,
      carosel_wedding_24,
  
  ]
  const imageLinks = originalImages.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `Image ${index + 1}`,
  }));

  return (

    <div className="app"  >
      <div className="container" style={{marginTop: "100px"}}>
        <div className="image-grid">
          {imageLinks.map((image, index) => (
            <div key={index} className="card">
              <img
                src={image.src}
                alt={image.alt}
                className="card-img-top"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default White_Wedding