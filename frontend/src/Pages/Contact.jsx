import React from "react";
import ContactInfo from "../Components/ContactComponents/ContactInfo/ContactInfo";
import ContactForm from "../Components/ContactComponents/ContactForm/ContactForm";
import MapSection from "../Components/ContactComponents/MapSection/MapSection";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <br />
      <br />
      <h1>Contact Us</h1>
      <div className="contact-content">
        <ContactInfo />
        <ContactForm />
      </div>
      <MapSection />
    </div>
  );
};

export default Contact;
