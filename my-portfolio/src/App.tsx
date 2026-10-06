import { useEffect, useState } from "react";

import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
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

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact onPrivacyClick={() => setIsPrivacyOpen(true)} />
      </main>

      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />

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

      <Analytics />
    </>
  );
}

export default App;