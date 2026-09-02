import profilePhoto from '../../assets/profile.jpg';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1>
          Phathutshedzo
          <span>Lidzhade</span>
        </h1>

        <h2>I build software that solves real problems.</h2>

        <p className="hero-description">Computer Science graduate focused on web development and software engineering and modern technologies</p>

        <span className="hero-stack">
          React ● TypeScript ● Node.js ● MySQL
        </span>

        <p className="hero-opportunity">● Open to opportunities</p>

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

        <div className="hero-photo">
          <img src={profilePhoto} alt="Phathutshedzo Lidzhade" />
        </div>

        <div className="hero-card">
          <span>
            {'● ● ●'} <br />
            {'const developer = {'} <br />
            {'name: "Phathutshedzo",'} <br />
            {'stack: ["React",'} <br />
            {'"TypeScript"],'} <br />
            {'learning: "Node.js"'} <br />
            {'};'}
          </span>
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default Hero;