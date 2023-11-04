
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully');
        form.current.reset(); // Clear the form
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('Error sending message');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container form" style={{ marginBottom: '190px', marginTop: '200px' }}>
      <h2 className="text-center">Contact Us</h2>
      <div className="d-flex justify-content-center">
        <div className="col-md-6 col-12">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="from_name"
                name="from_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="from_email"
                name="from_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button style={{ width: '100%' }} type="submit" className="btn btn-success">
              Submit
            </button>
            {isLoading && (
              <div className="overlay">
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Toast notification container */}
    </div>
  );
};

export default Contact;