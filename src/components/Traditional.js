// import React from 'react';

// const Traditional = () => {
//     const originalImage = 'https://media.istockphoto.com/id/1255153663/photo/cheery-black-guy-having-fun-over-yellow-background.jpg?s=612x612&w=0&k=20&c=iFfdTSPmiGAcrxy3VXfYuHkmcRzKvOWJ5GvlDrHOahI=';
  
//     // Generate 30 different image links with varying widths
//     const imageLinks = [];
//     for (let i = 1; i <= 30; i++) {
//       const width = i * 100; // Adjust the increment and multiplier as needed
//       const imageUrl = `${originalImage}&w=${width}`;
//       imageLinks.push({ src: imageUrl, alt: `Image ${i}` });
//     }
  
//     return (
//       <div className="app">
//         <h1 className="text-center mt-4">Image Gallery with Different Image Sizes</h1>
//         <div className="container-fluid">
//           <div className="row">
//             {imageLinks.map((image, index) => (
//               <div key={index} className="mb-4 col-md-4">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="img-fluid"
//                   style={{ width: '100%', height: 'auto' }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

// export default Traditional;


import React from 'react';

const Traditional = () => {
  const originalImages = [
    'https://media.istockphoto.com/id/1255153663/photo/cheery-black-guy-having-fun-over-yellow-background.jpg?s=612x612&w=0&k=20&c=iFfdTSPmiGAcrxy3VXfYuHkmcRzKvOWJ5GvlDrHOahI=',
    'https://i.pinimg.com/564x/51/1b/14/511b1489f12a70402e41cf1f9ec1049f.jpg',
    'https://i.pinimg.com/736x/1b/17/74/1b1774ed77c6c91cb95174d209136484.jpg',
    'https://i.pinimg.com/736x/b0/9c/77/b09c771635bf088e062be4459ccbf9b8.jpg',
    'https://static-uc.olist.ng/upload/20200211/lswfqyyg3k1.jpg',
    'https://i.pinimg.com/564x/62/39/96/62399684261c158a7b9a137e2b15d68f.jpg',
    'https://i.pinimg.com/736x/3f/f0/6b/3ff06bf1b5babbe07b9a58bbd8eb5133.jpg',
    "https://i.pinimg.com/564x/e2/85/d0/e285d0d37245756e43df666c6a3605b9.jpg",
    'https://anqr.com.ng/wp-content/uploads/2020/08/images-18.jpeg',
    'https://i.pinimg.com/736x/0a/73/f5/0a73f5148a9c963c65d893e8180470bf.jpg',
    "https://www.mynativefashion.com/wp-content/uploads/2022/07/Native-Styles-For-Men-18-2.jpg"
    // Add more image URLs here as needed
  ];

  // Generate imageLinks array by mapping over the originalImages array
  const imageLinks = originalImages.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `Image ${index + 1}`,
  }));

  return (
    <div className="app">
      <h1 className="text-center mt-4">Image Gallery with Different Image Sizes</h1>
      <div className="container-fluid">
        <div className="row">
          {imageLinks.map((image, index) => (
            <div key={index} className="mb-4 col-md-4">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Traditional;
