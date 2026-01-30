import "./BrandStory.css";
import { useEffect } from "react";
import brandBg from "../assets/images/Arabrn1.png";

export default function BrandStory() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".brand-eyebrow, .brand-content h2, .brand-content p, .brand-btn"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px" } // trigger slightly before fully in view
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      className="brand-story"
      style={{ backgroundImage: `url(${brandBg})` }}
    >
      <div className="brand-overlay" />

      <div className="brand-content">
        <span className="brand-eyebrow">Your Partner in Reliable Fabric Sourcing</span>

        <h2>Keep Your Production Moving</h2>

        <p>
          From sustainable textiles to high-performance stock, Aratex helps
          manufacturers, brands, and wholesalers streamline sourcing, control
          costs, and maintain product quality.
        </p>

        <a href="#" className="brand-btn">Explore Fabrics</a>
      </div>
    </section>
  );
}
