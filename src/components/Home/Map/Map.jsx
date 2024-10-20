import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const YourMapComponent = () => {
  // const [hoveredRegion, setHoveredRegion] = useState(null);

  // const handleMouseEnter = (region) => {
  //   setHoveredRegion(region);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredRegion(null);
  // };

  return (
    <div style={{ height: "400px", width: "100%" }}>
    {/* Embed Google Map or static map */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107745.66353711844!2d18.36516940607317!3d47.18176466938616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408f2066ad7851%3A0x44d15f56ec0bce6c!2sIsoflex%20Kft.!5e0!3m2!1sen!2shu!4v1696491169712!5m2!1sen!2shu"
      width="100%"
      height="100%"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  );
};

export default YourMapComponent;
