import React, { useEffect, useState } from "react";
import "./CustomerReviews.css";
import api from "../../../api";
import { useAuth } from "../../../context/AuthContext";

const CustomerReviews = ({ productId }) => {
  const { isAuthenticated } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(true);

  // Load reviews for this product
  useEffect(() => {
    if (!productId) return;

    setLoadingReviews(true);
    api
      .get(`/products/${productId}/reviews/`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Reviews load error", err))
      .finally(() => setLoadingReviews(false));
  }, [productId]);

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      alert("Please login to submit feedback.");
      return;
    }

    if (!reviewText.trim()) return;

    setLoading(true);
    try {
      const res = await api.post(`/products/${productId}/reviews/`, {
        review: reviewText,
      });

      // ✅ Add new feedback at the TOP
      setReviews((prev) => [res.data, ...prev]);
      setReviewText("");
    } catch (err) {
      console.error("Submit review error:", err);
      alert("Could not submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reviews">
      <h2>Customer Feedback</h2>

      {loadingReviews ? (
        <p>Loading feedback...</p>
      ) : reviews.length === 0 ? (
        <p>No feedback yet. Be the first!</p>
      ) : (
        <ul className="review-list">
          {reviews.map((r) => (
            <li key={r.id}>
              <strong>{r.name}</strong>
              <p>{r.review}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="review-form">
        <h3>Leave Feedback</h3>

        {!isAuthenticated && (
          <p className="review-login-hint">
            Please login to post feedback.
          </p>
        )}

        <textarea
          placeholder="Write your feedback..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          disabled={!isAuthenticated}
        />

        <button onClick={handleSubmit} disabled={loading || !isAuthenticated}>
          {loading ? "Posting..." : "Post Feedback"}
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
