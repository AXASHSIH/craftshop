import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p>
        We appreciate you reaching out to us. Our staff is available to help you
        and answer any questions or concerns you may have.
      </p>

      <h3>You can reach us using any of the following methods:</h3>

      <div className="info-item">
        <Phone size={18} /> <span>+91 82229 – 44567</span>
      </div>
      <div className="info-item">
        <Mail size={18} /> <span>ecom@gurez.com</span>
      </div>
      <div className="info-item">
        <MapPin size={18} />{" "}
        <span>near Church, Anand Vihar Colony, Karnal, Haryana</span>
      </div>

      <div className="business-hours">
        <h4>Business hours</h4>
        <ul>
          <li>Monday – Sunday: 9 am – 5:30 pm</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
