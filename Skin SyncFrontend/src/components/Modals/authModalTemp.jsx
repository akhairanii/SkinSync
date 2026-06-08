import React, { useEffect } from "react";
import "../../styles/authModal.css";

export default function AuthModal({ isOpen, type, title, message, onClose }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  if (!isOpen) return null;

  const isSuccess = type === "success";
  const icon = isSuccess ? "✨" : "💔"; //
  const btnText = isSuccess ? "Let's Glow!" : "Coba Lagi";

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div
        className={`auth-modal-card ${type}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-icon-wrapper">
          {icon}
        </div>

        <h2 className="auth-modal-title">{title}</h2>
        <p className="auth-modal-desc">{message}</p>

        <button className="auth-modal-btn" onClick={onClose}>
          {btnText}
        </button>
      </div>
    </div>
  );
}