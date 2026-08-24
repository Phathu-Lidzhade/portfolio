function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p>Contact</p>
          <h2>Let's work together</h2>

          <p>I'm open to opportunities, collaborations and interesting software projects. Feel free to get in touch.</p>
        </div>

        <div className="contact-content">
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:lidzhadephathuthsedzo027@gmail.com">
                lidzhadephathuthsedzo027@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <h3>GitHub</h3>
              <a href="https://github.com/Phathu-Lidzhade"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/phathutshedzo-lidzhade-a502a2382"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="Your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message..."
              />
            </div>

            <button type="submit">Send Message</button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact