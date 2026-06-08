import React, {useEffect} from "react";
import "../../styles/legalModal.css";

export default function LegalModal({isOpen, onClose, title, content, type})
{
    useEffect(() => {
        if(isOpen)
        {
            document.body.style.overflow = "hidden";
        }
        else
        {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    if(!isOpen)
    {
        return null;
    }

    return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {/* Icon Hiasan sesuai tipe */}
          <span className="modal-icon">
            {type === "privacy" ? "🔒" : "📜"}
          </span>
          <h2>{title}</h2>
          <button className="close-btn-icon" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          {content}
        </div>

        <div className="modal-footer">
          <button className="accept-btn" onClick={onClose}>
            Mengerti, Bestie!
          </button>
        </div>
      </div>
    </div>
  );
}