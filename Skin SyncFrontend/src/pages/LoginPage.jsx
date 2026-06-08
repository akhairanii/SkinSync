import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthModal from "../components/modals/AuthModal.jsx";
import "../styles/authModal.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const dataToSend ={
            email: formData.email,
            password: formData.password
            };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        dataToSend
      );

      const userData = response.data;

      localStorage.setItem(
        "user_session",
        JSON.stringify(userData)
      );

      setModal({
        isOpen: true,
        type: "success",
        title: "Welcome Home!",
        message: "Login berhasil. Siap untuk melanjutkan skincare journey kamu?",
        action: () => navigate("/")
      });

    } catch (err) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Oops, Gagal Masuk",
        message: err.response?.data?.message || "Terjadi kesalahan server",
        action: () => setModal({ ...modal, isOpen: false })
      });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-banner">
        <div className="banner-logo">SkinSync</div>

        <div className="banner-content">
          <h1>
            "Skincare bukan beban, <br />
            tapi momen <span className="highlight-text">memanjakan diri.</span>"
          </h1>
          <p>
            Your personal skincare journey starts here. <br/>
            Unlock your true radiance today!
          </p>
        </div>
      </div>

      <div className="auth-form-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Welcome Back!</h2>
            <p>Silakan login untuk melanjutkan journey SAkinGlowingmu.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Contoh: user@skinsync.id"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="********"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <button type="submit" className="auth-btn">Login Now</button>
          </form>

          <div className="auth-footer">
            <p>Belum punya akun? <Link to="/register" className="auth-link">Daftar dulu yuk!</Link></p>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={modal.isOpen}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() => {
          setModal({ ...modal, isOpen: false });
          if (modal.type === "success") modal.action();
        }}
      />
    </div>
  );
}
