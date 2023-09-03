// import React from 'react';

// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div className="container" style={{margin: "200px 0"}}>
//       <h2 className="text-center">Contact Us</h2>
//       <div className="d-flex justify-content-center">
//         <div className="col-md-6">
//           <form onSubmit={handleSubmit}>
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
//             <button style={{width: "100%"}} type="submit" className="btn btn-success">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
 
  return (
    <div className="container " style={{marginBottom: "190px", marginTop: "200px"}}>
      <h2 className="text-center">Contact Us</h2>
      <div className="d-flex justify-content-center">
        <div className="col-md-6 col-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
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
                id="email"
                name="email"
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
    </div>
  );
};

export default Contact;
