
import React from 'react';
import carosel_agbada_1 from '../assets/images/agbada/1.jpg';
import carosel_agbada_2 from '../assets/images/agbada/2.jpg';
import carosel_agbada_3 from '../assets/images/agbada/3.jpg';
import carosel_agbada_4 from '../assets/images/agbada/4.jpg';
import carosel_agbada_5 from '../assets/images/agbada/5.jpg';
import carosel_agbada_6 from '../assets/images/agbada/6.jpg';
import carosel_agbada_7 from '../assets/images/agbada/7.jpg';
import carosel_agbada_8 from '../assets/images/agbada/8.jpg';
import carosel_agbada_9 from '../assets/images/agbada/9.jpg';
import carosel_agbada_10 from '../assets/images/agbada/10.jpg';
import carosel_agbada_11 from '../assets/images/agbada/11.jpg';
import carosel_agbada_12 from '../assets/images/agbada/12.jpg';
import carosel_agbada_13 from '../assets/images/agbada/13.jpg';
import carosel_agbada_14 from '../assets/images/agbada/14.jpg';
import carosel_agbada_15 from '../assets/images/agbada/15.jpg';
import carosel_agbada_16 from '../assets/images/agbada/16.jpg';
import carosel_agbada_17 from '../assets/images/agbada/17.jpg';
import carosel_agbada_18 from '../assets/images/agbada/18.jpg';
import carosel_agbada_19 from '../assets/images/agbada/19.jpg';
import carosel_agbada_20 from '../assets/images/agbada/20.jpg';
import carosel_agbada_21 from '../assets/images/agbada/21.jpg';
import carosel_agbada_22 from '../assets/images/agbada/22.jpg';
import carosel_agbada_23 from '../assets/images/agbada/23.jpg';
import carosel_agbada_24 from '../assets/images/agbada/24.jpg';
import carosel_agbada_25 from '../assets/images/agbada/25.jpg';
import carosel_agbada_26 from '../assets/images/agbada/26.jpg';
import carosel_agbada_27 from '../assets/images/agbada/27.jpg';
import carosel_agbada_28 from '../assets/images/agbada/28.jpg';
import carosel_agbada_29 from '../assets/images/agbada/29.jpg';
import carosel_agbada_30 from '../assets/images/agbada/30.jpg';
import carosel_agbada_31 from '../assets/images/agbada/31.jpg';
import carosel_agbada_32 from '../assets/images/agbada/32.jpg';
import carosel_agbada_33 from '../assets/images/agbada/33.jpg';


// Rest of your code goes here


const Agbada = () => {
  const originalImages = [
    carosel_agbada_1,
    carosel_agbada_2,
    carosel_agbada_3,
    carosel_agbada_4,
    carosel_agbada_5,
    carosel_agbada_9,
    carosel_agbada_10,
    carosel_agbada_12,
    carosel_agbada_13,
    carosel_agbada_14,
    carosel_agbada_15,
    carosel_agbada_16,
  carosel_agbada_19,
  carosel_agbada_22,
  carosel_agbada_23,
  carosel_agbada_26,
  carosel_agbada_27,
  carosel_agbada_28,
  carosel_agbada_29,
  carosel_agbada_30,
  carosel_agbada_33,
   
  ]
  const imageLinks = originalImages.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `Image ${index + 1}`,
  }));

  return (
   
<div  >
<div className="container" style={{marginTop: "90px"}}>
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

export default Agbada;
