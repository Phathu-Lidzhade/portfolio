function Footer() {
  const currentYear = new Date().getFullYear();

  return(
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Phathutshedzo Lidzhade</h3>
          <p>Computer Science Graduate & Software Developer</p>
        </div>

        <div className="footer-links">
          <a 
            href="https://github.com/Phathu-Lidzhade"
            target="_blank"
            rel="noonpoener noreferrer"
          >
            GitHub
          </a>

          <a 
            href="https://www.linkedin.com/in/phathutshedzo-lidzhade-a502a2382"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:lidzhadephathuthsedzo027@gmail.com">
            Email
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Phathutshedzo Lidzhade. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer