import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Testimonials from "../components/Testimonials";

export default function DashboardPage() {
  const location = useLocation();

  useEffect(() => {
    if(location.state && location.state.scrollTo)
    {
      const targetId = location.state.scrollTo;
      const element = document.getElementById(targetId);

      if(element)
      {
        setTimeout(() => {
          element.scrollIntoView({behavior: "smooth"});
        }, 100);
      }

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="landing-page">

      {/* Hero */}
      <div id="HeroSection">
        <HeroSection />
      </div>

      {/* Features */}
      <div id="FeaturesSection">
        <FeaturesSection />
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

    </div>
  );
}
