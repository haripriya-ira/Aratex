import "./Footer.css";
import logo from "../assets/images/logoa1.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
       <div className="logo-text footer-logo">
    <span className="logo-primary">Ara</span>
    <span className="logo-secondary">tex</span>
  </div>


          <p className="footer-desc">
           Premium fabrics with consistent quality and regional expertise.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* PRODUCTS */}
      <div className="footer-col">
  <h4>Products</h4>
  <ul>
    <li><a href="#">Sustainable Fabrics</a></li>
    <li><a href="#">Ready-to-Ship Stock</a></li>
    <li><a href="#">Workwear Fabrics</a></li>
    <li><a href="#">Sampling</a></li>
  </ul>
</div>


        {/* CONTACT */}
      <div className="footer-col">
  <h4>Contact</h4>
  <p>Dubai, UAE</p>
  <p>Trusted Textile Partner Across UAE & GCC</p>
  <p>Email: info@example.com</p>
  <p>Phone: +00 000 000 000</p>
</div>


      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aratex Textiles. All rights reserved.</p>
      </div>
    </footer>
  );
}
