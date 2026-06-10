import React, { useState, useEffect } from "react";
import "../../styles/reviewModal.css";

export default function ReviewModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", role: "SkinGlow Bestie", text: "", rating: 5 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text){
      return;
    }

    const finalData = {
      ...formData,
      role: formData.role.trim() || "SkinGlow Bestie"
    }

    onSubmit(finalData);
    onClose();
  };

  return (
    <div className="review-overlay" onClick={onClose}>
      <div className="review-card" onClick={(e) => e.stopPropagation()}>
        <div className="review-header">
          <h3>Share Your Journey</h3>
          <h2>Write a Review</h2>
          <button className="review-close" onClick={onClose}>&times;</button>
        </div>

        <form className="review-form" onSubmit={handleSubmit}>
          <div className="rating-input">
            <label>Beri Rating:</label>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${formData.rating >= star ? "filled" : ""}`}
                  onClick={() => setFormData({ ...formData, rating: star })}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="input-group">
            <label>Nama Kamu</label>
            <input
              type="text"
              placeholder="Misal: Rara"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="input-group">
              <label>Pekerjaan</label>
              <input
                type="text"
                placeholder="Contoh: Mahasiswi, Ibu Rumah Tangga"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                required
              />
          </div>

          <div className="input-group">
            <label>Cerita SkinGlowingmu</label>
            <textarea
              rows="4"
              placeholder="Ceritain pengalaman kamu pakai SkinSync..."
              value={formData.text}
              onChange={(e) => setFormData({...formData, text: e.target.value})}
              required
            />
          </div>

          <button type="submit" className="submit-review-btn">Kirim Review</button>
        </form>
      </div>
    </div>
  );
}
