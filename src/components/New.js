import React from 'react';

const New = () => {
  const backgroundImageUrl = "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=1600";

  const services = [
    { title: 'Alterations and Tailoring', description: '...' },
    { title: 'Custom Clothing Creation', description: '...' },
    { title: 'Repairs', description: '...' },
    { title: 'Fittings and Consultations', description: '...' },
    { title: 'Wedding and Formal Attire', description: '...' },
    { title: 'Restyling and Upcycling', description: '...' },
  ];

  return (
    <div className="services-section">
      {services.map((service, index) => (
        <div className="service" key={index}>
          <div className="service-background" style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
          <div className="service-overlay" />
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default New;
