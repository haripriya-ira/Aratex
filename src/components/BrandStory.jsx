import "./BrandStory.css";
import brandBg from "../assets/images/Arabrn1.png";

export default function BrandStory() {
  return (
    <section className="brand-story" style={{ backgroundImage: `url(${brandBg})` }}>
      {/* Overlay */}
      <div className="brand-overlay"></div>

      <div className="brand-content">
        <span className="brand-eyebrow">Always Ready for Your Production</span>

        <h2>Premium Fabrics & Yarn, On-Demand</h2>

        <p>
          From sustainable fabrics to ready-to-ship stock, Aratex helps garment
          manufacturers meet deadlines, reduce costs, and deliver high-quality
          products every time.
        </p>

        <a href="#" className="brand-btn">
          Explore Fabrics
        </a>
      </div>
    </section>
  );
}
