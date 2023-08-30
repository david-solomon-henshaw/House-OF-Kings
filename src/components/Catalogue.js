import React from 'react'


import carosel_1 from '../assets/images/carosel1.jpg'
import carosel_2 from '../assets/images/carosel2.jpg'
import carosel_3 from '../assets/images/carosel3.jpg'
const Catalogue = () => {
    const image = "https://i.etsystatic.com/41339740/c/828/828/0/24/il/9b2a42/5236818622/il_600x600.5236818622_orn3.jpg" 
 const image2 = "https://www.jahdacollection.com/cdn/shop/products/DSC_3084-scaled.jpg?v=1642846620"
 const image3 = "https://static-uc.olist.ng/upload/20200227/nggxwju9fcx.jpg"   
 const image4 = "https://www.jahdacollection.com/cdn/shop/products/wakanda_8d511465-87ae-4576-a192-d2d6ff46def4_1946x.jpg?v=1644251470"
 return (
    <div>

<div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    </div>
  )
}

export default Catalogue