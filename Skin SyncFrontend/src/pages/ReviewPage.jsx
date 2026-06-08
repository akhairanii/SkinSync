import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ReviewPage() {
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState("⭐⭐⭐⭐⭐");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("reviews")) || [];

    setReviews(saved);
  }, []);

  const handleSubmit = () => {
    if (!product || !review) {
      alert("Lengkapi data terlebih dahulu!");
      return;
    }

    const newReview = {
      id: Date.now(),
      product,
      rating,
      review,
      date: new Date().toLocaleDateString(),
    };

    const updated = [newReview, ...reviews];

    setReviews(updated);

    localStorage.setItem(
      "reviews",
      JSON.stringify(updated)
    );

    setProduct("");
    setReview("");
  };

  return (
    <div className="container">
      <Link to="/">← Dashboard</Link>

      <h1>Product Reviews</h1>

      <p>
        Bagikan pengalaman menggunakan produk skincare.
      </p>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Nama Produk"
          value={product}
          onChange={(e) =>
            setProduct(e.target.value)
          }
        />

        <br /><br />

        <select
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
        >
          <option>⭐</option>
          <option>⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐⭐</option>
        </select>

        <br /><br />

        <textarea
          rows="5"
          placeholder="Tulis review..."
          value={review}
          onChange={(e) =>
            setReview(e.target.value)
          }
        />

        <br /><br />

        <button onClick={handleSubmit}>
          Submit Review
        </button>
      </div>

      <hr />

      <h2>Community Reviews</h2>

      {reviews.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.product}</h3>

          <p>{item.rating}</p>

          <p>{item.review}</p>

          <small>{item.date}</small>
        </div>
      ))}
    </div>
  );
}