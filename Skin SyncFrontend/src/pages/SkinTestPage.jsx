import React, { useState } from "react";
import skinTypes from "../data/skinTypes.js";
import "../styles/skinTypes.css";
import { useNavigate } from "react-router-dom";

export default function SkinTestPage(){
    const[selected, setSelected] = useState(null);
    const[isAnalyzing, setAnalyzing] = useState(false);
    const navigate = useNavigate();

    const handleSelect = (type) => {
    setSelected(type);
    setAnalyzing(true);
    localStorage.setItem("skinType", type);

    setTimeout(() => {
        navigate("/recommendations");
        }, 3000);
    };

return(
    <div className="skin-test-container">
        <h1 className= "test-title"> Skin Type Test</h1>
        <p className= "test-subtitle">Pilih kondisi kulit yang paling menggambarkan dirimu saat ini:</p>

        <div className= "skin-types-grid">
            {skinTypes.map((s) => (
                <div
                key={s.id}
                className={`skin-card ${selected === s.type ? "selected": ""}`}
                onClick={() => handleSelect(s.type)}
                >
                <div className="img-wrapper">
                    <img src={s.image} alt={s.type} className="skin-image"/>
                    </div>
                    <h3 className="skin-name" >{s.type}</h3>
                    </div>
                    ))}
                </div>

                {isAnalyzing && (
                    <div className="analyzing-overlay">
                        <div className="analysis-box">
                            <div className="spinner"></div>
                            <p>Menganalisis jenis kulitmu, tunggu sebentar..</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }