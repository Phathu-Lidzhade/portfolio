import React, { useState, type FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(" http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      setStatus(
        error instanceof Error
        ? error.message
        : "Unable to send your message."
      );
    }
    finally {
    setIsSubmitting(false);
    }
  };

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
                Phathu Lidzhade
              </a>
            </div>

            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/phathutshedzo-lidzhade-a502a2382"
                target="_blank"
                rel="noopener noreferrer"
              >
                Phathutshedzo Lidzhade
              </a>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your message..."
                required
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="form-status">{status}</p>}

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact