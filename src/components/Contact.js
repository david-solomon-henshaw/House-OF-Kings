import React from 'react';
import { Form, Button } from 'react-bootstrap';
import video from '../assets/videos/vid.mp4'
const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="blur-overlay"></div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <Form>
          {/* Add your form fields here */}
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          {/* Add more form fields as needed */}
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
