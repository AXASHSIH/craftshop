import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <div className="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1865.1598735790706!2d85.41806818972128!3d20.778348324602664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18c4c26db6669d%3A0xa70198ceeab35387!2sGopabandhu%20Club%2C%20Bangursingh!5e0!3m2!1sen!2sin!4v1761746284870!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Craftshop Location"
      ></iframe>
    </div>
  );
};

export default MapSection;
