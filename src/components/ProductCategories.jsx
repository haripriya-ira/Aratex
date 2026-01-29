import "./ProductCategories.css";
import img2 from "../assets/images/Arapro2.jpg";
import img3 from "../assets/images/Arapro3.jpg";
import img4 from "../assets/images/card4.jpg";

const categories = [
  {
    title: "Sustainable Fabrics",
    image:
      "https://images.unsplash.com/photo-1640746942093-cec8e647596d?auto=format&fit=crop&w=800&q=80",
    tag: "Sustainable",
    link: "#",
  },
  {
    title: "Fabric Warehouse Inventory",
    image: img2,
    tag: "Ready-to-Ship",
    link: "#",
  },
  {
    title: "Premium Fabric Textures",
    image: img3,
    tag: "Workwear",
    link: "#",
  },
 {
    title: "Fabric Swatches & Sampling",
    image:img4,
    tag: "Samples",
    link: "#",
  },
];

export default function ProductCategories() {
  return (
    <section className="categories-section">
      <div className="categories-container">
        {/* Section Header */}
        <div className="categories-header">
          <h2>Our Product Categories</h2>
          <p>
            From yarn to finished garments, we deliver quality textiles at every stage.
            Explore our sustainable fabrics, ready-to-ship stock, and high-performance workwear solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <a href={cat.link} className="category-card" key={index}>
              <div
                className="category-bg"
                style={{ backgroundImage: `url(${cat.image})` }}
              ></div>

              <div className="category-overlay"></div>

              <div className="category-content">
                {cat.tag && <span className="category-tag">{cat.tag}</span>}
                <h2>{cat.title}</h2>
                <span className="category-btn">View More</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
