import { useNavigate } from "react-router-dom";
import "../styles/recommendation.css";

export default function ProductCard({ image, name, link, price, benefit, delay, onViewDetails }) {
  const navigate = useNavigate();

  const goToRoutine = () => {
    const skinType = localStorage.getItem("skinType") || "Normal";
    navigate('/routine', { state: {brandName: name, skinType: skinType} });
  }

  return (
    <div className="rec-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="rec-img" />
        {benefit && <span className="benefit-badge">{benefit}</span>}
      </div>

      <div className="card-content">
        <h3 className="rec-brand">{name}</h3>
        <p className="rec-price">
          <span className="price-label">Estimasi Set :</span> <br />
          <span className="price-value">{price}</span>
        </p>

        <div className="card-actions">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="rec-btn primary-btn"
          >
            Beli Set Hemat
          </a>

          <button
            className="rec-btn secondary-btn"
            onClick={onViewDetails}
          >
            Lihat Produk Lainnya
          </button>

          <button
            className="rec-btn routine-btn"
            onClick={goToRoutine}
            style={{ marginTop: '10px', background: '#e0f7fa', color: '#006064', border: 'none' }}
          >
            Lihat Panduan Pakai
          </button>
        </div>
      </div>
    </div>
  );
}