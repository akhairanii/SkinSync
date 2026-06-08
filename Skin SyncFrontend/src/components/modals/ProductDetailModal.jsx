import { useEffect } from "react";
import "../../styles/ProductDetailModal.css";

export default function ProductDetailModal({ isOpen, onClose, brandData, brandName })
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
    }, [isOpen]);

    if(!isOpen || !brandData)
    {
        return null;
    }

    const items = [
        { type: "Facial Wash", ...brandData.cleanser, icon: "🧼" },
        { type: "Toner / Serum", ...brandData.serum, icon: "💧" },
        { type: "Moisturizer", ...brandData.moisturizer, icon: "🧴" },
        { type: "Sunscreen", ...brandData.sunscreen, icon: "☀️" },
    ];

    return (
    <div className="pd-overlay" onClick={onClose}>
      <div className="pd-card" onClick={(e) => e.stopPropagation()}>
        <div className="pd-header">
          <h3>Eceran / Satuan</h3>
          <h2>{brandName} Series</h2>
          <button className="pd-close" onClick={onClose}>&times;</button>
        </div>

        <div className="pd-body">
            <div className="pd-warning">
                <span className="warning-icon">⚠️</span>
                <p>
                    <strong>Note Penting:</strong> Daftar di bawah adalah produk <em>Best Seller</em>.
                    Pastikan kamu memilih varian yang sesuai dengan tipe kulitmu saat di Shopee ya, Bestie!
                </p>
            </div>

          <div className="pd-list">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="pd-item"
              >
                <div className="pd-img-container">
                   {item.img ? (
                     <img src={item.img} alt={item.name} className="pd-thumb" />
                   ) : (
                     <span className="pd-icon-fallback">{item.icon}</span>
                   )}
                </div>

                <div className="pd-info">
                  <span className="pd-type">{item.type}</span>
                  <span className="pd-name">{item.name}</span>
                </div>

                <div className="pd-price-action">
                    <span className="pd-price">{item.price}</span>
                    <span className="pd-arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
