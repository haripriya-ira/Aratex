import "./BrandStory.css";
import { motion } from "framer-motion";
import brandBg from "../assets/images/Arabrn1.png";

export default function BrandStory() {
  return (
    <section
      className="brand-story"
      style={{ backgroundImage: `url(${brandBg})` }}
    >
      <div className="brand-overlay" />

      <div className="brand-content">
        <span className="brand-eyebrow">
         Your Partner in Reliable Fabric Sourcing
        </span>

       <h2>
 Keep Your Production Moving
</h2>



        <p>
          From sustainable textiles to high-performance stock, Aratex helps manufacturers, brands, and wholesalers streamline sourcing, control costs, and maintain product quality.
        </p>

        <a href="#" className="brand-btn">
          Explore Fabrics
        </a>
      </div>
    </section>
  );
}
