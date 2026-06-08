import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthModal from "../components/modals/authModal";
import "../styles/auth.css";

const Registerpage = () => {
    const navigate = useNavigate();

    // 1. Inisialisasi data input form
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // 2. Default isOpen HARUS false supaya modal tidak muncul sendiri di awal
    const [modal, setModal] = useState({
        isOpen: false,
        type: "",
        title: "",
        message: "",
        action: null
    });

    // 3. Fungsi submit data ketika tombol diklik
    const handleSubmit = async (e) => {
        e.preventDefault(); // Menahan halaman agar tidak refresh

        try {
            // Bungkus data input ke variabel sesuai entitas backend (username)
            const dataToSend = {
                fullName: formData.name,
                email: formData.email,
                password: formData.password,
                role: "USER"
            };

            // Kirim ke backend port 8080
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, dataToSend);

            // Jika sukses, munculkan pop-up berhasil
            setModal({
                isOpen: true,
                type: "success",
                title: "Welcome to SkinSync!!",
                message: "Akun pendaftaran berhasil dibuat. Yuk login!",
                action: () => navigate("/login")
            });

        } catch (err) {
            console.error("Error pendaftaran di console:", err);
            // Jika benar-benar gagal dari backend, baru munculkan pop-up gagal
            setModal({
                isOpen: true,
                type: "error",
                title: "Oops!",
                message: err.response?.data?.message || "Gagal mendaftar. Terjadi kesalahan server.",
                action: null
            });
        }
    };

    return (
        <div className="auth-form-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>Create Account ✨</h2>
                    <p>Isi data diri kamu untuk mulai bergabung.</p>
                </div>

                {/* Form terhubung dengan fungsi handleSubmit */}
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Nama Lengkap</label>
                        <input
                            type="text"
                            placeholder="Nama panggilanmu"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Contoh: user@gmail.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Masukkan password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    {/* Tombol Register tipe submit tanpa onClick tambahan */}
                    <button type="submit" className="btn-auth" style={{backgroundColor: '#e76f51', color: 'white', padding: '10px', borderRadius: '8px', border: 'none', width: '100%', cursor: 'pointer', marginTop: '15px'}}>
                        Register
                    </button>
                </form>

                <p className="auth-redirect" style={{marginTop: '15px', textAlign: 'center'}}>
                    Sudah punya akun? <span style={{color: '#e76f51', cursor: 'pointer'}} onClick={() => navigate("/login")}>Login di sini</span>
                </p>
            </div>

            {/* STRUKTUR MODAL FIX: Hanya muncul jika modal.isOpen bernilai true */}
            {modal.isOpen && (
                <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
                    <div style={{backgroundColor: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', maxWidth: '400px', width: '90%'}}>
                        <h2>{modal.title}</h2>
                        <p style={{margin: '15px 0'}}>{modal.message}</p>
                        <button
                            style={{backgroundColor: '#e76f51', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer'}}
                            onClick={() => {
                                setModal({ ...modal, isOpen: false });
                                if (modal.action) modal.action();
                            }}
                        >
                            {modal.type === "success" ? "Mulai Login" : "Coba Lagi"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Registerpage;
