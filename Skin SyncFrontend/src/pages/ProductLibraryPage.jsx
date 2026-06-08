import { useState } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";

import "../styles/recommendation.css";
import skincareSets from "../data/skincareSet";
import individualProducts from "../data/individualProduct";

import ProductCard from "../components/ProductCard";
import ProductDetailModal from "../components/Modals/ProductDetailModal";

export default function ProductLibraryPage() {
  const location = useLocation();

  const storedSkinType = localStorage.getItem("skinType");
  const stateSkinType = location.state?.skinType;

  const skinType = stateSkinType || storedSkinType;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  if (!skinType) {
    return <Navigate to="/skin-test" replace />;
  }

  const skinToCategory = {
    Normal: "glowing",
    Kering: "barrier",
    Berminyak: "acne",
    Kombinasi: "bright",
    Sensitif: "barrier",
    Jerawat: "acne",
  };

  const categoryKey = skinToCategory[skinType] || "glowing";
  const data = skincareSets[categoryKey];

  const openDetailModal = (brandName) => {
    const brandProducts = individualProducts[brandName];

    setSelectedBrand({
      name: brandName,
      data: brandProducts,
    });

    setIsModalOpen(true);
  };

  return (
    <section className="rec-page">

      <div className="rec-header">

        <span className="rec-tag">
          SKINSYNC PRODUCT LIBRARY
        </span>

        <h2 className="rec-title">
          Recommended Products for{" "}
          <span className="highlight-text">
            {skinType} Skin
          </span>
        </h2>

        <p className="rec-desc">
          Berdasarkan hasil Skin Test, berikut adalah produk skincare
          yang direkomendasikan untuk membantu menjaga kesehatan kulitmu.
        </p>

        <Link
          to="/skin-test"
          className="rec-back-link"
        >
          ← Retake Skin Test
        </Link>

      </div>

      <div className="rec-grid">

        {data?.brands?.map((brand, index) => (
          <ProductCard
            key={index}
            image={brand.img}
            name={brand.name}
            price={brand.price}
            benefit={brand.benefit}
            link={brand.link}
            delay={index * 150}
            onViewDetails={() =>
              openDetailModal(brand.name)
            }
          />
        ))}

      </div>

      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brandName={selectedBrand?.name}
        brandData={selectedBrand?.data}
      />

    </section>
  );
}
