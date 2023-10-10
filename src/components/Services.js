import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import carosel_kaftan_15 from '../assets/images/kaftans/15.jpg';


const Services = () => {
  const serviceData = [
    {
      title: 'White Wedding',
      description: 'Elegant and customized wedding dresses and suits for your special day.',
      link: '/catalogue/white/wedding',
      imageUrl: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/255783179_5032854926725078_2433390086836605296_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=bcc5cc&_nc_ohc=XABL5GTIXq0AX9-KQXe&_nc_ht=scontent-los2-1.xx&oh=00_AfAOHZhpOPXSK5O-o8eKjHmIDRjS3_gvqvbHchjYmHvwtQ&oe=65259E24',
    },
    
    {
      title: 'Traditional Wedding',
      description: 'Traditional and stylish outfits reflecting our cultural heritage.',
      link: '/catalogue/traditional_wedding',
      imageUrl: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/326013386_476688454660417_6064513785153967143_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=FJ8rWEIYK68AX-qDzzZ&_nc_ht=scontent-los2-1.xx&oh=00_AfDlCZTUMvf0xcR6jvVAudM__Sr1yiy_5-BjkTG_Yedw1w&oe=65262B6E',
    },
    {
      title: 'Suits',
      description: 'Tailored suits that exude confidence and professionalism.',
      link: 'catalogue/suits',
      imageUrl: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/277364754_5509472942396605_205402227904762805_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=bcc5cc&_nc_ohc=KaoYlPyURsoAX8Wry6v&_nc_ht=scontent-los2-1.xx&oh=00_AfDKOa6MAUYQZVize8H5_7JBBrMXoLe-wMyzXi546VQiPA&oe=65268712',
    },
    {
      title: 'Agbada',
      description: 'Luxurious and traditional Agbada attire for special occasions.',
      link: '/catalogue/agbada',
      imageUrl: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/204629307_4618475901496318_9075916437270803869_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=bcc5cc&_nc_ohc=FNynfIwJ8ckAX-ohQTu&_nc_oc=AQkANfHZtb4wpieNuOthBoRKFikygEHJmv5j9oE0QXlueNnIIXvkPFcUUk_B6OWenOk&_nc_ht=scontent-los2-1.xx&oh=00_AfA02Q-kj2AWgz_UEtdBAHn9BwfDKG9_YaC4Lo4SuSTzRg&oe=6526CFA5',
    },
    
    {
      title: 'Kaftan',
      description: 'Elegant and stylish Kaftan clothing for both casual and formal occasions.',
      link: '/catalogue/kaftan',
      imageUrl: carosel_kaftan_15,
    }
    // Add more service items as needed
  ];
       
  return (
    <section className="services-section py-5">
      <div className="container">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className={`row ${index % 2 === 0 ? '' : 'flex-md-row-reverse'} align-items-center`}
            style={{ margin: '20px 0', border: 'solid #c19c3e 2px', color: 'white' }}
          >
            <div className="col-md-6 d-flex align-items-center">
              <img src={service.imageUrl} alt={service.title} className="img-fluid" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div style={{ margin: '15px 0 0' }}>
                <h2 style={{ color: '#c19c3e' }}>{service.title}</h2>
                <p>{service.description}</p>
                <p>
                  <Link to={service.link}>
                    <button className="btn">
                      See Our Catalogue <FaArrowRight style={{ margin: '5px' }} />
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
