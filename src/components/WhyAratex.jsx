import "./WhyAratex.css";
import whyImage from "../assets/images/Arawhy.webp";

export default function WhyAratex() {
  return (
    <section className="why-section" id="why">
      <div className="why-container">

        {/* IMAGE */}
        <div className="why-image">
          <img src={whyImage} alt="Aratex Office and Showroom" />
        </div>

        {/* CONTENT */}
        <div className="why-content">
          <span className="why-tag">WHY ARATEX</span>

          <h2>
            Built for Buyers 
            <br/>
            <span> Who Value Reliability</span>
          </h2>

          <p className="why-description">
            We partner with manufacturers, wholesalers, and brands that
            prioritize consistency and long-term reliability. Through
            on-ground sourcing, strict quality control, and transparent
            communication, Aratex helps buyers source premium fabrics
            with confidence.
          </p>

          <p className="why-description">
            From first sampling to final shipment, every step is managed
            with clarity, accountability, and respect for your timelines.
          </p>
        </div>
      </div>
    </section>
  );
}
