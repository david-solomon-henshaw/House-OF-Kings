
import React from 'react';

import carosel_suits_1 from '../assets/images/suits/1.jpg';
import carosel_suits_2 from '../assets/images/suits/2.jpg';
import carosel_suits_3 from '../assets/images/suits/3.jpg';
import carosel_suits_6 from '../assets/images/suits/6.jpg';
import carosel_suits_7 from '../assets/images/suits/7.jpg';
import carosel_suits_8 from '../assets/images/suits/8.jpg';
import carosel_suits_9 from '../assets/images/suits/9.jpg';
import carosel_suits_10 from '../assets/images/suits/10.jpg';
import carosel_suits_11 from '../assets/images/suits/11.jpg';
import carosel_suits_13 from '../assets/images/suits/13.jpg';
import carosel_suits_14 from '../assets/images/suits/14.jpg';
import carosel_suits_16 from '../assets/images/suits/16.jpg';
import carosel_suits_17 from '../assets/images/suits/17.jpg';
import carosel_suits_18 from '../assets/images/suits/18.jpg';
import carosel_suits_19 from '../assets/images/suits/19.jpg';
import carosel_suits_20 from '../assets/images/suits/20.jpg';
import carosel_suits_21 from '../assets/images/suits/21.jpg';
import carosel_suits_22 from '../assets/images/suits/22.jpg';
import carosel_suits_23 from '../assets/images/suits/23.jpg';
import carosel_suits_24 from '../assets/images/suits/24.jpg';
import carosel_suits_25 from '../assets/images/suits/25.jpg';
import carosel_suits_26 from '../assets/images/suits/26.jpg';
import carosel_suits_27 from '../assets/images/suits/27.jpg';
import carosel_suits_28 from '../assets/images/suits/28.jpg';
import carosel_suits_29 from '../assets/images/suits/29.jpg';
import carosel_suits_30 from '../assets/images/suits/30.jpg';
import carosel_suits_31 from '../assets/images/suits/31.jpg';
import carosel_suits_32 from '../assets/images/suits/32.jpg';
import carosel_suits_33 from '../assets/images/suits/33.jpg';
import carosel_suits_34 from '../assets/images/suits/34.jpg';
import carosel_suits_35 from '../assets/images/suits/35.jpg';
import carosel_suits_36 from '../assets/images/suits/36.jpg';
import carosel_suits_37 from '../assets/images/suits/37.jpg';
import carosel_suits_38 from '../assets/images/suits/38.jpg';
import carosel_suits_39 from '../assets/images/suits/39.jpg';

const Suits = () => {
  const originalImages = [
    carosel_suits_1,
    carosel_suits_2,
    carosel_suits_3,
    carosel_suits_6,
    carosel_suits_7,
    carosel_suits_8,
    carosel_suits_9,
    carosel_suits_10,
    carosel_suits_11,
    carosel_suits_13,
    carosel_suits_14,
    carosel_suits_16,
    carosel_suits_17,
    carosel_suits_18,
    carosel_suits_19,
    carosel_suits_20,
    carosel_suits_21,
    carosel_suits_22,
    carosel_suits_23,
    carosel_suits_24,
    carosel_suits_25,
    carosel_suits_26,
    carosel_suits_27,
    carosel_suits_28,
    carosel_suits_29,
    carosel_suits_30,
    carosel_suits_31,
    carosel_suits_32,
    carosel_suits_33,
    carosel_suits_34,
    carosel_suits_35,
    carosel_suits_36,
    carosel_suits_37,
    carosel_suits_38,
    carosel_suits_39
  ]
  
  const imageLinks = originalImages.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `Image ${index + 1}`,
  }));

  return (
   
<div className="mt-5"  >
<div  className="container " style={{marginTop: "100px"}} >
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

export default Suits;
