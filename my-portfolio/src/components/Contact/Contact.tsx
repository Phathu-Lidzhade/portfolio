import React, { useEffect, useState, type FormEvent } from "react";

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
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    if (!isPrivacyOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPrivacyOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPrivacyOpen]);

  useEffect(() => {
    if (!isPrivacyOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPrivacyOpen]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const waitForBackend = async (): Promise<boolean> => {
    const healthUrl = `${import.meta.env.VITE_API_URL}/api/health`;

    for (let attempt = 1; attempt <= 10; attempt++) {
      try {
        const response = await fetch(healthUrl);

        if (response.ok) {
          return true;
        }
      } catch {
        //backend
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    return false;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("Starting contact service...");

    try {
      const backendReady = await waitForBackend();

      if (!backendReady) {
        setStatus(
          "The contact service is taking longer than expected. Please try again in a moment."
        );
        return;
      }

      setStatus("Sending your message...");

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
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
      console.error("Contact form error:", error);

      setStatus(
        "We couldn't connect to the contact service. Please try again shortly."
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
              <a href="mailto:lidzhadephathutshedzo027@gmail.com">
                lidzhadephathutshedzo027@gmail.com
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

          <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
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

            {status && 
              <p className="form-status"
              aria-live="polite"
              role="status"
              >
                {status}
              </p>
            }

            <p>Your information is only used to respond to your enquiry. By submitting this form, you agree to the processing of your your information.{" "}
              <button
                type="button"
                className="privacy-link"
                onClick={() => setIsPrivacyOpen(true)}
              >
                Privacy Policy
              </button>
            </p>

          </form>
        </div>
      </div>

      {isPrivacyOpen && (
        <div 
          className="privacy-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
        >
          <div className="privacy-modal-content">
            <button
              type="button"
              className="privacy-close"
              onClick={() => setIsPrivacyOpen(false)}
              aria-label="Close privacy policy"
            >
              ×
            </button>

            <h2 id="privacy-title">Privacy Policy</h2>

            <p>Last updated: September 2026</p>

            <h3>1. Information We Collect</h3>

            <p>
              When you use the contact form, you may provide your name, email address, and the message or enquiry you submit.
            </p>

            <h3>2. How Your Information Is Used</h3>
            <p>
              Information submitted through the contact form is used only to respond to your enquiry, communication with you regarding your message, and follow up when necessary.
            </p>

            <h3>3. How Your Information Is Processed</h3>
            <p>
              Your information is sent to the website's backend for processing and is then used to send the message to the website owner's email address.
            </p>
            
            <p>
              The website uses Vercel for website hosting, Render for backend hosting, and Resend for processing and delivering contact form emails.
            </p>

            <h3>4. Sharing of Information</h3>
            <p>
              Your personal information is not sold or intentionally shared with third parties for advertising or marketing purposes.
            </p>

            <h3>5. Data Retention</h3>
            <p>
              Contact form information mat be retained in email correspondence for as long as reasonably necessary to respond to and manage the enquiry.
            </p>

            <h3>6. Cookies and Local Storage</h3>
            <p>
              The website does not use cookies for advertising or tracking purposes. Your browser's local storage may be used to remember your light or dark theme preference.
            </p>

            <h3>7. Security</h3>
            <p>
              Reasonable technical measures are used to protect information submitted through the website. However, no method of transmitting or storing information over the internet can be guaranteed to be completely secure.
            </p>

            <h3>8. Your Rights</h3>
            <p>
              Depending on the circumstances and applicable law, you may have rights regarding your personal information, including the right to request access to, correction of, or deletion of your personal information.
            </p>

            <h3>9. Changes to This Privacy Policy</h3>
            <p>
              This Privacy Policy may be updated from time to time if the website's functionality or the way personal information is handled changes.
            </p>

            <h3>10. Contact</h3>
            <p>
              If you have questions about this Privacy Policy or how your information id handled, please contact Phathitshedzo Lidzhade through the contact form available on this website.
            </p>

            <button 
              type="button"
              className="privacy-close-button"
              onClick={() => setIsPrivacyOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact