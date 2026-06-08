import React, { useState } from "react";
import skinTypes from "../data/skinTypes";
import { useNavigate } from "react-router-dom";

export default function SkinTypePage()
{
    const [selected, setSelected] = useState(null);
    const [isAnalyzing, setAnalyzing] = useState(false);
    const navigate = useNavigate();

    const handleSelect = (type) => {
        setSelected(type);
        setAnalyzing(true);
        localStorage.setItem("skinType", type);
        setTimeout(() => navigate("/recommendations"), 3000);
    };

    return (
        <section className="skin-page">
            <div className="skin-header">
                <span className="skin-tag">STEP 1 : IDENTIFICATION</span>
                <h2 className="skin-title">Let's Get to Know You</h2>
                <p className="skin-sub">
                    Pilih kondisi kulit yang paling menggambarkan kamu saat ini. <br/>
                    SkinSync akan mencarikan jodoh skincare terbaik buat kamu!
                </p>
            </div>

            <div className="skin-grid">
                {skinTypes.map((s) => (
                    <div
                        key={s.id}
                        className={`skin-card ${selected === s.type ? "selected" : ""}`}
                        onClick={() => handleSelect(s.type)}
                    >
                        <div className="img-wrapper">
                            <img src={s.image} alt={s.type} className="skin-image" />
                        </div>
                        <h3 className="skin-name">{s.type}</h3>
                        <p className="skin-desc">{s.desc}</p>
                    </div>
                ))}
            </div>

            {isAnalyzing && (
                <div className="analyzing-overlay">
                    <div className="spinner-glow"></div>
                    <h3>Analyzing your skin profile...</h3>
                    <p>Mencari produk terbaik</p>
                </div>
            )}
        </section>
    );
}