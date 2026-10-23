import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const contactEmail = "ptechstudio1@gmail.com";

function App() {
  return (
    <div className="app">
      <div className="topline">
        <div className="container topline-inner">
          <span>🎓 Student support, made simpler</span>
          <span>Independent student-help project · Not a government website</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" style={{ textDecoration: "none" }}>
            <span className="logo">S</span>
            <span>Student Sahayak<small>Scholarships · Student Resources · Contact</small></span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#resources">Official Resources</a>
            <a className="nav-admin" href={`mailto:${contactEmail}`}>Contact Us</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">YOUR EDUCATION. YOUR VOICE.</span>
              <h1>Student support, made simpler.</h1>
              <p>
                Find useful student resources and official education links in one place.
                If you have a question or suggestion about Student Sahayak, contact us by email.
              </p>
              <div className="hero-actions">
                <a className="btn white" href={`mailto:${contactEmail}`}>Email us ↗</a>
                <a className="btn outline" href="#resources">Explore resources</a>
              </div>
              <p className="hero-note">
                Student Sahayak is an independent educational project, not a government portal.
                For urgent safety concerns, contact local emergency services or your college authorities.
              </p>
            </div>
            <div className="hero-panel">
              <h3>How we can help</h3>
              <div className="quick">
                <span>🎓</span>
                <div><b>Scholarship resources</b><small>Find links to official scholarship portals</small></div>
              </div>
              <div className="quick">
                <span>📚</span>
                <div><b>Student information</b><small>Use trusted education and student-support resources</small></div>
              </div>
              <div className="quick">
                <span>✉️</span>
                <div><b>Contact the project team</b><small>Email us with questions or suggestions</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="container feature-grid">
          <article className="feature">
            <div className="feature-icon">🎓</div>
            <h3>Scholarship information</h3>
            <p>Access official scholarship websites to check eligibility, application details and updates.</p>
            <a className="text-btn" href="https://mahadbt.maharashtra.gov.in/" target="_blank" rel="noreferrer">Visit MahaDBT →</a>
          </article>
          <article className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>Student safety</h3>
            <p>For ragging-related concerns, use the official anti-ragging resources.</p>
            <a className="text-btn" href="https://www.antiragging.in/" target="_blank" rel="noreferrer">Visit Anti-Ragging Portal →</a>
          </article>
          <article className="feature">
            <div className="feature-icon">💬</div>
            <h3>Questions or suggestions?</h3>
            <p>Contact us directly by email. Your email application will open when you click below.</p>
            <a className="text-btn" href={`mailto:${contactEmail}`}>Email Student Sahayak →</a>
          </article>
        </section>

        <section className="container links-section" id="resources">
          <div>
            <span className="eyebrow dark">OFFICIAL RESOURCES</span>
            <h2>Useful student links</h2>
            <p>Use the official websites for current rules, applications and help. Student Sahayak is not affiliated with these authorities.</p>
          </div>
          <div className="official-links">
            <a href="https://mahadbt.maharashtra.gov.in/" target="_blank" rel="noreferrer">MahaDBT ↗</a>
            <a href="https://scholarships.gov.in/" target="_blank" rel="noreferrer">National Scholarship Portal ↗</a>
            <a href="https://www.antiragging.in/" target="_blank" rel="noreferrer">Anti-Ragging Portal ↗</a>
            <a href="https://www.ugc.gov.in/" target="_blank" rel="noreferrer">UGC ↗</a>
          </div>
        </section>

        <section className="container contact-section" id="contact">
          <span className="eyebrow dark">CONTACT</span>
          <h2>Get in touch</h2>
          <p>For questions, feedback or suggestions, email us at:</p>
          <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <p className="contact-note">Clicking the email opens your device's default email application. This website does not store or send messages itself.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#home" style={{ textDecoration: "none" }}>
              <span className="logo">S</span>
              <span>Student Sahayak<small>Scholarships · Student Resources · Contact</small></span>
            </a>
            <p>Independent educational project built to direct students toward useful information and official resources.</p>
          </div>
          <div>
            <b>Quick links</b>
            <a href="#home">Home</a>
            <a href="#resources">Official resources</a>
            <a href={`mailto:${contactEmail}`}>Contact by email</a>
          </div>
          <div>
            <b>Contact</b>
            <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
            <p>Do not send passwords, Aadhaar numbers, bank details or other sensitive information by email.</p>
          </div>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Student Sahayak · Independent educational project
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
