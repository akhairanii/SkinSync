import { useEffect } from "react";
import "../../styles/logoutModal.css";

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="logout-overlay" onClick={onClose}>
      <div className="logout-card" onClick={(e) => e.stopPropagation()}>
        <div className="logout-icon">🥺</div>

        <h2 className="logout-title">Leaving So Soon?</h2>
        <p className="logout-desc">
          Yakin mau logout? Nanti kangen loh sama skincare routine-nya.
        </p>

        <div className="logout-actions">
          <button className="btn-cancel" onClick={onClose}>
            Gak Jadi Deh
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
}