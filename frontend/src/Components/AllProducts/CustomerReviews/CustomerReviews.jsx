import React, { useState } from "react";
import "./CustomerReviews.css";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([
    { name: "Emily", text: "Absolutely love this bowl! Great quality and craftsmanship." },
    { name: "Daniel", text: "Perfect addition to my dining table." },
  ]);
  const [newReview, setNewReview] = useState("");

  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, { name: "Guest", text: newReview }]);
      setNewReview("");
    }
  };

  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      <ul className="review-list">
        {reviews.map((r, i) => (
          <li key={i}>
            <strong>{r.name}</strong>
            <p>{r.text}</p>
          </li>
        ))}
      </ul>
      <textarea
        placeholder="Write your review..."
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      />
      <button onClick={handleAddReview}>Submit Review</button>
    </div>
  );
};

export default CustomerReviews;
