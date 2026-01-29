import "./Hero.css";

export default function Hero() {
 
  const heroVideo = "https://res.cloudinary.com/dvxlr7njh/video/upload/v1769685433/AraHerovideo_an9e8w.mp4";

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
          preload="auto"
          poster="/assets/hero-placeholder.jpg" 
        />
      </div>
    </section>
  );
}
