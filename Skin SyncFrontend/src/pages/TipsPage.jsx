import { useState } from "react";
import { Link } from "react-router-dom";
import tipsData from "../data/tipsData";
import "../styles/tips.css";

export default function TipsPage()
{
    const [activeIndices, setActiveIndices] = useState([]);

    const toggleItem = (catIndex, itemIndex) => {
        const key = `${catIndex}-${itemIndex}`;
        setActiveIndices((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <section className="tips-page">
            <div className="tips-header">
                <Link to="/" className="back-link">← Home</Link>
                <h1 className="tips-title">Skincare Hacks & <span className="highlight">Secrets</span></h1>
                <span className="tips-tag">SkinSync Academy</span>
                <p className="tips-sub">
                Bukan mitos, ini fakta medis dan rahasia <strong>insider</strong> yang wajib kamu tahu biar glowing tanpa drama!
                </p>
            </div>

            <div className="tips-container">
                {tipsData.map((category, catIndex) => (
                <div key={catIndex} className="tips-category">
                    <h2 className="cat-title">{category.category}</h2>

                    <div className="tips-list">
                    {category.items.map((item, itemIndex) => {
                        const isOpen = activeIndices[`${catIndex}-${itemIndex}`];

                        return (
                        <div
                            key={itemIndex}
                            className={`tips-card ${isOpen ? "open" : ""}`}
                            onClick={() => toggleItem(catIndex, itemIndex)}
                        >
                            <div className="tips-question">
                                <h3>{item.title}</h3>
                                <span className="toggle-icon">
                                    ▼
                                </span>
                            </div>

                            <div className="tips-answer">
                                <p>{item.content}</p>
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </div>
                ))}
            </div>

            <div className="tips-footer">
                <p>Sudah siap praktekin ilmunya?</p>
                <Link to="/skin-type" className="tips-btn">
                Mulai Skin Journey
                </Link>
            </div>
        </section>
    );
}