import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <h2 className="contact-title">Partner With Aratex</h2>
          <p className="contact-subtitle">
             Clear communication, reliable timelines, and sourcing solutions you can trust.
          </p>

          <form className="contact-form">
            <div className="name-fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input type="email" placeholder="Email Address" />
            <textarea rows="4" placeholder="Tell us about your fabric requirements"></textarea>

            <button type="submit">Send Enquiry</button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <div className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1200"
              alt="Professional communication"
            />
          </div>

          {/* Trust / Demo details */}
          <div className="trust-cards">
            <div className="trust-card">📍 Trusted Textile Partner Across UAE & GCC</div>
            <div className="trust-card">📞 +00 000 000 000</div>
            <div className="trust-card">✉️ info@example.com</div>
          </div>
        </div>

      </div>

      {/* MAP – generic location for demo */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.847372987!2d54.897824!3d25.075086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzQ5LjAiTiA1NMKwNTMnMDUuMCJF!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          loading="lazy"
          title="Demo Location Map"
        />
      </div>
    </section>
  );
}
