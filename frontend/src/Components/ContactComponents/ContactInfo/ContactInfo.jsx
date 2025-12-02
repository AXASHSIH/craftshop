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
        <Phone size={18} /> <span>+91 8249799644</span>
      </div>
      <div className="info-item">
        <Mail size={18} /> <span>mycraftshop.official@gmail.com</span>
      </div>
      <div className="info-item">
        <MapPin size={18} />{" "}
        <span>near Bangursingh Post Office, Bangursingh, Dhenkanal, Odisha</span>
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
