
import React from 'react';
import carosel_kaftan_1 from '../assets/images/kaftans/1.jpg';
import carosel_kaftan_2 from '../assets/images/kaftans/2.jpg';
import carosel_kaftan_4 from '../assets/images/kaftans/4.jpg';
import carosel_kaftan_6 from '../assets/images/kaftans/6.jpg';
import carosel_kaftan_7 from '../assets/images/kaftans/7.jpg';
import carosel_kaftan_8 from '../assets/images/kaftans/8.jpg';
import carosel_kaftan_10 from '../assets/images/kaftans/10.jpg';
import carosel_kaftan_12 from '../assets/images/kaftans/12.jpg';
import carosel_kaftan_13 from '../assets/images/kaftans/13.jpg';
import carosel_kaftan_14 from '../assets/images/kaftans/14.jpg';
import carosel_kaftan_15 from '../assets/images/kaftans/15.jpg';
import carosel_kaftan_16 from '../assets/images/kaftans/16.jpg';
import carosel_kaftan_17 from '../assets/images/kaftans/17.jpg';
import carosel_kaftan_18 from '../assets/images/kaftans/18.jpg';
import carosel_kaftan_20 from '../assets/images/kaftans/20.jpg';


const Kaftan = () => {
  const originalImages = [
    carosel_kaftan_1,
    carosel_kaftan_4,
    carosel_kaftan_6,
    carosel_kaftan_7,
    carosel_kaftan_8,
    carosel_kaftan_10,
    carosel_kaftan_12,
    carosel_kaftan_13,
    carosel_kaftan_14,
    carosel_kaftan_15,
    carosel_kaftan_16,
    carosel_kaftan_17,
    carosel_kaftan_18,
    carosel_kaftan_20,
    carosel_kaftan_2,

  ]
  const imageLinks = originalImages.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `Bespoke Kaftan Wear ${index + 1}`,
  }));

  return (
   
<div  > 
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

export default Kaftan;
