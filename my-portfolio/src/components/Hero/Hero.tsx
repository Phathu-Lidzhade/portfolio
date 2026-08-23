function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1>
          Phathu
          <span>Lidzhade</span>
        </h1>

        <h2>Computer Science Student & Aspiring Software Developer</h2>

        <p className="hero-description">I build web applications and software solutions while continuously learning and exploring new technologies</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <br />

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <span>&lt;/&gt;</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;