import React, { useEffect, useRef } from "react";
import "../styles/features.css";
import features from "../data/features";

export default function FeatureSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
          else
          {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="feature-section">
      <div className="feature-header">
        <span className="feature-tag">WHY CHOOSE US?</span>
        <h2 className="feature-title">
          Everything You Need to <span className="text-gradient">Shine</span>
        </h2>
        <p className="feature-subtitle">
          Tools lengkap buat nemenin perjalanan SkinGlowing-mu, dari yang baru belajar sampai jadi <span className="highlight">Skincare Expert!</span>
        </p>
      </div>

      <div className="feature-grid">
        {features.map((f, i) => (
          <div
            key={i}
            className="feature-card"
            ref={el => cardsRef.current[i] = el}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="icon-wrapper">
                <img src={f.icon} alt={f.title} className="feature-img"/>
            </div>
            <h3 className="feature-name">{f.title}</h3>
            <p className="feature-description">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}