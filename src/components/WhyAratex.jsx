import "./WhyAratex.css";
import { motion, useScroll, useTransform } from "framer-motion";
import whyImage from "../assets/images/Arawhy.webp";

export default function WhyAratex() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <section className="why-section" id="why">
      <div className="why-bg-accent" />

      <div className="why-container">
        {/* IMAGE */}
        <motion.div
          className="why-image wow-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {
              opacity: 0,
              clipPath: "inset(12% 12% 12% 12% round 22px)",
              scale: 1.04
            },
            visible: {
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0% round 22px)",
              scale: 1,
              transition: { duration: 1.2, ease: "easeOut" }
            }
          }}
        >
          <div className="image-3d">
            <img src={whyImage} alt="Aratex Office and Showroom" />
            <span className="image-sheen" />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="why-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } }
          }}
        >
          <motion.span
            className="why-tag"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            WHY ARATEX
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
            }}
          >
            Built for Buyers <br />
            <span>Who Value Reliability</span>
          </motion.h2>

          <motion.div
            className="why-divider"
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6 } }
            }}
          />

          <motion.p
            className="why-description"
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            We help manufacturers, brands, and wholesalers source fabrics they can trust — from ready-to-ship UAE warehouse stock to made-to-order options, all tested for performance and durability.
          </motion.p>

          <motion.p
            className="why-description"
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
           Every order, from first sample to final shipment, is managed with clarity, accountability, and respect for your timelines, ensuring a smooth and reliable sourcing experience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
