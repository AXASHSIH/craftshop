import React from "react";
import { Truck, Lock, RotateCcw, Clock } from "lucide-react";
import "./FeturesHighlight.css";

const features = [
  {
    icon: <Truck className="feature-icon" />,
    title: "Free Shipping",
    description: "On orders over Rs. 1000",
  },
  {
    icon: <Lock className="feature-icon" />,
    title: "Secure Payment",
    description: "100% protected payments",
  },
  {
    icon: <RotateCcw className="feature-icon" />,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: <Clock className="feature-icon" />,
    title: "24/7 Support",
    description: "Dedicated customer service",
  },
];

const FeatureHighlights = () => {
  return (
    <div className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon-wrapper">{feature.icon}</div>
            <div className="feature-text">
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureHighlights;
