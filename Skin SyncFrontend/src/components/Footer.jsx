import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LegalModal from "../components/modals/legalModal";
import legalData from "../data/legalData";
import axios from "axios";
import "../styles/footer.css";

import instagram from "../assets/icons/instagram.png";
import tiktok from "../assets/icons/tiktok.png";
import twitter from "../assets/icons/twitter.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({title: "", type: "", body: null});

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const openModal = (type) => {
    setModalContent(legalData[type]);
    setModalOpen(true);
  }

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/subscribe`, { email });
      setStatus("success");
      setEmail("");

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      alert(err.response?.data?.message || "Gagal subscribe, coba lagi ya!");
      setStatus("idle");
    }
  };

  const handleTestimonialsClick = (e) => {
    e.preventDefault();

    if(location.pathname === "/")
    {
      const section = document.getElementById("testimonials");
      if(section)
      {
        section.scrollIntoView({behavior: "smooth"});
      }
    }
    else
    {
      navigate("/", {state: {scrollTo: "testimonials"}});
    }
  }

  return (
    <>
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-section brand">
          <h2 className="footer-logo">SkinSync</h2>
          <p className="footer-tagline">
            Your personal skincare bestie. Temukan kilau naturalmu dan tampil percaya diri setiap hari.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skin-type">Cek Jenis Kulit</Link></li>
            <li><Link to="/tips">Tips & Hacks</Link></li>
            <li><a href="#testimonials" onClick={handleTestimonialsClick}>Testimoni</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Connect</h3>
          <p>Butuh bantuan curhat soal kulit?</p>
          <a href="mailto:hello@skinsync.id" className="contact-link">hello@skinsync.id</a>

          <div className="social-icons">
            <a href="https://instagram.com" className="social-btn" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://tiktok.com" className="social-btn" target="_blank" rel="noreferrer">
              <img src={tiktok} alt="TikTok" />
            </a>
            <a href="https://twitter.com" className="social-btn" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h3>Join SkinSync Squad</h3>
          <p>Dapatkan tips skincare & diskon rahasia langsung ke emailmu.</p>

          {status === "success" ? (
            <div className="newsletter-success">
              <p>Yay! Welcome to the squad, Bestie! Cek inbox kamu ya<span className="success-icon">💌</span>.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email Kamu, Bestie..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={`newsletter-btn ${status === "loading" ? "btn-loading" : ""}`}
              >
                {status === "loading" ? (
                  <>
                    <span className="loading-spinner"></span>
                    sending...
                  </>
                ) : (
                  "Join"
                )}
              </button>
            </form>
          )}
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 SkinSync. Made with LOVE for Indonesian SkinGlow Girls.</p>
        <div className="footer-legal">
          <button className="legal-link" onClick={() => openModal("privacy")}>
            Privacy Policy
          </button>
          <button className="legal-link" onClick={() => openModal("terms")}>
            Terms of Service
          </button>
        </div>
      </div>
    </footer>

    <LegalModal
      isOpen={modalOpen}
      onClose={() => setModalOpen(false)}
      title={modalContent.title}
      content={modalContent.body}
      type={modalContent.type}
    />
    </>
  );
}
