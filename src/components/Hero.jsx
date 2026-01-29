import "./Hero.css";
import heroVideo from "../assets/images/AraHerovideo.mp4";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      
    </section>
  );
}
