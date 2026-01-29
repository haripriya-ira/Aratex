import React from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left Column - Form Card */}
        <div className="contact-left">
          <div className="form-card">
            <h2>Get in Touch</h2>
            <p className="contact-tagline">
              Building <span>trust</span> with every message, reaching you faster than ever.
            </p>

            <form className="contact-form">
              <div className="name-fields">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* Right Column - Image + Info Cards */}
        <div className="contact-right">
         <div className="contact-image">
  <img
    src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Professional holding phone"
  />
</div>


<div className="contact-cards">
  <div className="info-card">
    <FaMapMarkerAlt className="icon" />
    <p>
      Business District<br />
      Global Office Location
    </p>
  </div>

  <div className="info-card">
    <FaPhoneAlt className="icon" />
    <p>+XXX XX XXX XXXX</p>
  </div>

  <div className="info-card">
    <FaEnvelope className="icon" />
    <p>info@yourdomain.com</p>
  </div>

  <div className="social-card">
    <FaFacebookF className="icon" />
    <FaTwitter className="icon" />
    <FaLinkedinIn className="icon" />
  </div>
</div>


        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.847372987!2d54.897824!3d25.075086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0x4c2f7c8c2c1b1c1f!2sDubai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  width="80%"
  height="300"
  style={{ border: 0 }}
  loading="lazy"
  title="Dubai UAE Map"
/>


      </div>
    </section>
  );
}
