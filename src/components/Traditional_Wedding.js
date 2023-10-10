
import React from 'react';
import carosel_trad_0 from '../assets/images/traditional_wedding/0.jpg'
import carosel_trad_2 from '../assets/images/traditional_wedding/2.jpg';
import carosel_trad_3 from '../assets/images/traditional_wedding/3.jpg';
import carosel_trad_4 from '../assets/images/traditional_wedding/4.jpg';
import carosel_trad_5 from '../assets/images/traditional_wedding/5.jpg';
import carosel_trad_6 from '../assets/images/traditional_wedding/6.jpg';
import carosel_trad_7 from '../assets/images/traditional_wedding/7.jpg';
import carosel_trad_8 from '../assets/images/traditional_wedding/8.jpg';
import carosel_trad_9 from '../assets/images/traditional_wedding/9.jpg';
import carosel_trad_10 from '../assets/images/traditional_wedding/10.jpg';
import carosel_trad_11 from '../assets/images/traditional_wedding/11.jpg';
import carosel_trad_12 from '../assets/images/traditional_wedding/12.jpg';
import carosel_trad_13 from '../assets/images/traditional_wedding/13.jpg';
import carosel_trad_14 from '../assets/images/traditional_wedding/14.jpg';
import carosel_trad_15 from '../assets/images/traditional_wedding/15.jpg';
import carosel_trad_16 from '../assets/images/traditional_wedding/16.jpg';
import carosel_trad_17 from '../assets/images/traditional_wedding/17.jpg';
import carosel_trad_18 from '../assets/images/traditional_wedding/18.jpg';
import carosel_trad_19 from '../assets/images/traditional_wedding/19.jpg';
import carosel_trad_20 from '../assets/images/traditional_wedding/20.jpg';
import carosel_trad_21 from '../assets/images/traditional_wedding/21.jpg';
import carosel_trad_22 from '../assets/images/traditional_wedding/22.jpg';
import carosel_trad_23 from '../assets/images/traditional_wedding/23.jpg';
import carosel_trad_24 from '../assets/images/traditional_wedding/24.jpg';
import carosel_trad_25 from '../assets/images/traditional_wedding/25.jpg';
import carosel_trad_26 from '../assets/images/traditional_wedding/26.jpg';
import carosel_trad_27 from '../assets/images/traditional_wedding/27.jpg';
import carosel_trad_29 from '../assets/images/traditional_wedding/29.jpg';
import carosel_trad_31 from '../assets/images/traditional_wedding/31.jpg';
import carosel_trad_32 from '../assets/images/traditional_wedding/32.jpg';
import carosel_trad_33 from '../assets/images/traditional_wedding/33.jpg';
import carosel_trad_34 from '../assets/images/traditional_wedding/34.jpg';
import carosel_trad_35 from '../assets/images/traditional_wedding/35.jpg';
import carosel_trad_36 from '../assets/images/traditional_wedding/36.jpg';
import carosel_trad_37 from '../assets/images/traditional_wedding/37.jpg';
import carosel_trad_38 from '../assets/images/traditional_wedding/38.jpg';
import carosel_trad_39 from '../assets/images/traditional_wedding/39.jpg';
import carosel_trad_40 from '../assets/images/traditional_wedding/40.jpg';
import carosel_trad_41 from '../assets/images/traditional_wedding/41.jpg';
import carosel_trad_42 from '../assets/images/traditional_wedding/42.jpg';

const Traditional = () => {
  const originalImages = [
    carosel_trad_2,
    carosel_trad_4,
    carosel_trad_5,
    carosel_trad_6,
    carosel_trad_7,
    carosel_trad_8,
    carosel_trad_9,
    carosel_trad_33,
    carosel_trad_10,
    carosel_trad_11,
    carosel_trad_12,
    carosel_trad_13,
    carosel_trad_14,
    carosel_trad_17,
    carosel_trad_19,
    carosel_trad_21,
    carosel_trad_22,
    carosel_trad_23,
    carosel_trad_25,
    carosel_trad_34,
    carosel_trad_36,
  ]
  const imageLinks = originalImages.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `Image ${index + 1}`,
  }));

  return (
   
<div className="app" >
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

export default Traditional;
