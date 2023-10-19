import React from 'react'
const About = () => {
  return (
    <div className='mt-5'>


      <div >
        <div className="row">
          <div className="col-md-6 order-md-2 d-flex align-items-center">
            <img
              src="https://images.pexels.com/photos/6766363/pexels-photo-6766363.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Bespoke Suit"
              className="img-fluid h-100"
            />
          </div>
          <div className="col-md-6 order-md-1 d-flex align-items-center"> 
            <div style={{ margin: "20px", "backgroundColor": "#673a87", padding: "40px"}}>
              <h2 style={{ color: "#c19c3e", textDecoration: "underline", fontWeight: 900 }}>Who We Are</h2> 
              <p style={{ color: "#f3f3f3", fontSize: "18px", fontWeight: 900}}>
                House of Kings Creations is where the art of bespoke tailoring thrives. As dedicated artisans, we transform fabrics into personalized masterpieces that reflect your unique style and personality. With a heritage of excellence spanning [X years], our skilled team of tailors is committed to precision and a passion for tailoring that sets us apart. We take pride in crafting attire that is not only a perfect fit but also an expression of confidence and sophistication. Welcome to House of Kings Creations, where craftsmanship meets elegance. </p>
            </div>
          </div>
        </div>





        <div className="row">
          <div className="col-md-6 order-md-2 d-flex align-items-center">
            <div style={{ margin: "20px", "backgroundColor": "#673a87" , padding: "40px" }}>
              <h2 style={{ color: "#c19c3e", textDecoration: "underline", fontWeight: 900 }}>Why Us</h2>
              <p style={{ color: "#f3f3f3", fontSize: "18px", fontWeight: "bolder" }}>
                At House of Kings Creations, we're your premier choice for bespoke tailoring. Our commitment to craftsmanship means every garment we create is a masterpiece, reflecting your unique style. We offer personalized service tailored to your preferences, ensuring an impeccable fit and uncompromising quality. With decades of tailoring expertise, we excel in crafting attire that stands the test of time. Customer satisfaction is our top priority, and we go the extra mile to exceed your expectations. Elevate your style journey with House of Kings Creations, where excellence meets elegance.
              </p>

            </div>
          </div>
          <div className="col-md-6 order-md-1 d-flex align-items-center">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/01/16/44/mannequin-2566559_640.jpg"
              alt="Bespoke Tailor"
              className="img-fluid h-100"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default About