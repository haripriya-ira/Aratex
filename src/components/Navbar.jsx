import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo-text" onClick={scrollToTop} style={{ cursor: "pointer" }}>
          <span className="logo-primary">Ara</span>
          <span className="logo-secondary">tex</span>
        </div>

        {/* NAV */}
        <nav className="nav-links">
          <a href="#why">Why Aratex</a>
          <a href="#categories">Fabrics</a>
          <a href="#brandstory">Brand Story</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA GROUP */}
        <div className="nav-actions">
          <a href="#samples" className="nav-secondary">Request Sample</a>
          <a href="#contact" className="nav-primary">Get Quote</a>
        </div>
      </div>
    </header>
  );
}
