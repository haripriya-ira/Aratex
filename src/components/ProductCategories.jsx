import "./ProductCategories.css";
import { motion } from "framer-motion";
import img2 from "../assets/images/Arapro2.jpg";
import img3 from "../assets/images/Arapro3.jpg";
import img4 from "../assets/images/card4.jpg";

const categories = [
  {
    title: "Sustainable & Recycled Fabrics",
    image:
      "https://images.unsplash.com/photo-1640746942093-cec8e647596d?auto=format&fit=crop&w=800&q=80",
    tag: "Eco-Friendly",
    cta: "Request Sample",
    link: "#",
  },
  {
    title: "Ready-to-Ship Warehouse Stock",
    image: img2,
    tag: "Fast Delivery",
    cta: "Explore Inventory",
    link: "#",
  },
  {
    title: "High-Performance Workwear Fabrics",
    image: img3,
    tag: "Workwear",
    cta: "Request Quote",
    link: "#",
  },
  {
    title: "Fabric Sampling & Testing",
    image: img4,
    tag: "Samples",
    cta: "Request Sample",
    link: "#",
  },
];

export default function ProductCategories() {
  return (
    <section className="categories-section">
      <motion.div
        className="categories-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        <motion.div
          className="categories-header"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 70 },
            },
          }}
        >
          <h2>Explore Our Fabric Solutions</h2>
          <p>
           <p>
  From ready-to-ship warehouse stock to custom fabrics, Aratex delivers high-performance, tested textiles.  
  Manufacturers, brands, and wholesalers benefit from fast access and flexible sourcing.
</p>

          </p>
        </motion.div>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <motion.a
              href={cat.link}
              className="category-card"
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
                delay: index * 0.25,
              }}
            >
              <div className="card-wow-layer" />

              <div
                className="category-bg"
                style={{ backgroundImage: `url(${cat.image})` }}
              />

              <div className="category-overlay" />

              <div className="category-content">
                {cat.tag && <span className="category-tag">{cat.tag}</span>}
                <h2>{cat.title}</h2>
                <span className="category-btn">{cat.cta}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
