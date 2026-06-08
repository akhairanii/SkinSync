import { useState } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import skincareSets from "../data/skincareSet";
import individualProducts from "../data/individualProduct";
import ProductCard from "../components/ProductCard";
import ProductDetailModal from "../components/modals/ProductDetailModal";

export default function Recommendations() {
  const location = useLocation();
  const storedSkinType = localStorage.getItem("skinType");
  const stateSkinType = location.state?.skinType;
  const skinType = stateSkinType || storedSkinType;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  if(!skinType)
  {
    return <Navigate to="/skin-type" replace/>
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
  const data = skincareSets?.[categoryKey] || { brands: [], desc: "" };

  const openDetailModal = (brandName) => {
    const brandProducts = individualProducts[brandName];
    setSelectedBrand({name: brandName, data: brandProducts});
    setIsModalOpen(true);
  };

  return (
    <section className="rec-page">
      <div className="rec-header">
        <span className="rec-tag">YOUR PERSONALIZED MATCH</span>
        <h2 className="rec-title">
          Special Picks for <span className="highlight-text">{skinType} Skin</span>
        </h2>
        <p className="rec-desc">
          {data?.desc || "Rekomendasi produk terbaik untuk kulit sehatmu."}
        </p>

        <Link to="/skin-type" className="rec-back-link">
          ← Ganti Profil Kulit
        </Link>
      </div>

      <div className="rec-grid">
        {data?.brands?.length > 0 &&
          data.brands.map((brand, i) => (
          <ProductCard
            key={i}
            image={brand.img}
            name={brand.name}
            link={brand.link}
            price={brand.price}
            benefit={brand.benefit}
            delay={i * 150}
            onViewDetails={() => openDetailModal(brand.name)}
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
