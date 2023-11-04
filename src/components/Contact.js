// import React , { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {

//   const form = useRef();


//   const handleSubmit = (e) => {
//      e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
 
//   return (
//     <div className="container form " style={{marginBottom: "190px", marginTop: "200px"}}>
//       <h2 className="text-center">Contact Us</h2>
//       <div className="d-flex justify-content-center">
//         <div className="col-md-6 col-12">
//           <form ref={form} onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">
//                 Message
//               </label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 name="message"
//                 rows="5"
//                 placeholder="Your Message"
//                 required
//               ></textarea>
//             </div>
//             <button style={{ width: '100%' }} type="submit" className="btn btn-success">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const serviceId = 'service_9qmafbm'
// const templateId = 'template_7fqwobr';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked')
    //console.log(serviceId,templateId,publicKey)
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
      });
  };

  return (
    <div className="container form" style={{ marginBottom: "190px", marginTop: "200px" }}>
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
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Toast notification container */}
    </div>
  );
};

export default Contact;
