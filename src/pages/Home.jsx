import { useEffect } from "react";

import Hero from "../components/Hero";
import WhyAratex from "../components/WhyAratex";
import ProductCategories from "../components/ProductCategories";
import BrandStory from "../components/BrandStory";
import Contact from "../components/Contact";
import "./Home.css";

export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="reveal reveal-bottom">
  <Hero />
</section>

<section className="reveal reveal-right">
  <WhyAratex />
</section>

<section className="reveal reveal-right">
  <ProductCategories />
</section>

<section className="reveal reveal-right">
  <BrandStory />
</section>

<section className="reveal reveal-right">
  <Contact />
</section>

    </>
  );
}
