import React from 'react';
import homeImage from './image'; // Import your image file


export default function Home() {
  return (
    <div>
      {/* <h4 align="left">I am in Home Page</h4> */}
      <img src={homeImage} alt="Home" style={{ width: '1600px', height: 'auto' }} />

      {/* <img src={homeImage} alt="Home" /> Use the imported image */}
    </div>
  );
}
