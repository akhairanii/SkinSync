import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

import bg1 from "../assets/img/bg1.png";
import bg2 from "../assets/img/bg2.png";
import bg3 from "../assets/img/bg3.png";

export default function HeroSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePlannerClick = () => {
    const savedSkinType = localStorage.getItem("skinType");

    if(savedSkinType)
    {
      navigate("/recommendations");
    }
    else
    {
      alert("Eits, sebelum bikin jadwal, kita cek dulu jenis kulitmu ya!");
      navigate("/skin-type");
    }
  };

  const slides = [
    {
      id: 1,
      image: bg1,
      title: <>Unlock Your <span className="hero-highlight">Inner SkinGlow</span></>,
      subtitle: "Jangan tebak-tebakan! Cek kondisi kulitmu sekarang dan temukan 'Holy Grail' produk yang pas buat kamu.",
      btnText: "Analisis Kulitku",
      action: () => navigate("/skin-type"),
    },
    {
      id: 2,
      image: bg2,
      title: <>Your Daily <span className="hero-highlight">Beauty Ritual</span></>,
      subtitle: "Konsistensi Melampaui Intensitas. Yuk, bangun kebiasaan skincare sehat pagi & malam bareng planner kami.",
      btnText: "Mulai Rutinitas",
      action: handlePlannerClick,
    },
    {
      id: 3,
      image: bg3,
      title: <>Join The <span className="hero-highlight">SkinGlow Squad</span></>,
      subtitle: "Kamu nggak sendirian! Gabung dengan ribuan Bestie lainnya yang sudah lebih percaya diri.",
      btnText: "Lihat Cerita Mereka",
      action: () => document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" }),
    },
  ]

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  }

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide-item ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }} // Menggunakan Inline Style untuk background dinamis
        >
          <div className="overlay"></div>

          <div className="hero-content">
            <h1 className={index === currentSlide ? "animate-title" : ""}>
              {slide.title}
            </h1>
            <p className={index === currentSlide ? "animate-sub" : ""}>
              {slide.subtitle}
            </p>
            <button
              className="hero-btn"
              onClick={slide.action}
            >
              {slide.btnText}
            </button>
          </div>
        </div>
      ))}

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
