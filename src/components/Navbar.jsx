import "./Navbar.css";
import logo from "../assets/images/logoa1.png";
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


return (
<header className={`navbar ${scrolled ? "scrolled" : ""}`}>
<div className="nav-container">
{/* LOGO */}
<div className="logo-text">
  <span className="logo-primary">Ara</span>
  <span className="logo-secondary">tex</span>
</div>





{/* NAV */}
<nav className="nav-links">
<a href="#solutions">Solutions</a>
<a href="#fabrics">Fabrics</a>
<a href="#industries">Industries</a>
<a href="#about">Why Aratex</a>
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