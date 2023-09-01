import React from 'react'

const OfficeWears = () => {
    const originalImage = 'https://media.istockphoto.com/id/1255153663/photo/cheery-black-guy-having-fun-over-yellow-background.jpg?s=612x612&w=0&k=20&c=iFfdTSPmiGAcrxy3VXfYuHkmcRzKvOWJ5GvlDrHOahI=';
  
    // Generate 30 different image links with varying widths
    const imageLinks = [];
    for (let i = 1; i <= 30; i++) {
      const width = i * 100; // Adjust the increment and multiplier as needed
      const imageUrl = `${originalImage}&w=${width}`;
      imageLinks.push({ src: imageUrl, alt: `Image ${i}` });
    }
  
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
  )
}

export default OfficeWears