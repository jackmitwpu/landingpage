import React, { useRef }from 'react';
import './App.css';
import logo from './assets/logo.png';
import collegepic from './assets/college.jpg';
import flyer from "./assets/Flyerimg.jpg" 
import aiml from "./assets/ai_ml.jpg";
import it from "./assets/it.jpg";
import et from "./assets/et.jpg";
import compscience from "./assets/comp_science.jpg";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa6';
import Counter from "./Counter";
function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f9m3lwq", // 🔁 Replace with your EmailJS Service ID
        "template_x7725jm", // 🔁 Replace with your EmailJS Template ID
        form.current,
        "tTYTcXGIhVuzVeOkp" // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Enquiry submitted successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Something went wrong. Please try again.");
          console.log(error.text);
        }
      );
  };
  return (
    <>
    <header className="header">
      <div className="header-container">
        {/* Left: Logo */}
        <div className="logo">
          <a href="index.php" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="MIT WPU" />
          </a>
        </div>

        

        {/* Center: Admissions Button */}
        <div className="admissions-section">
          <a
            href="https://www.mitmumbai.com/apply-now"
            target="_blank"
            rel="noopener noreferrer"
            className="admissions-link"
          >
            Admissions Open for 2025
          </a>
        </div>

        {/* Right: Contact Icons */}
        <div className="contact-icons">
          <a href="https://api.whatsapp.com/send?phone=" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="tel:02071177142" target="_blank" rel="noopener noreferrer">
            <FaPhone />
          </a>
          <a href="mailto:admissions@mitmumbai.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
                  {/* Social icons next to logo */}
        <div className="social-icons">
          <a href="https://www.facebook.com/share/18vkLkHMVZ/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/mitengineeringofficial?igsh=MTZkamo3ajNub3V2bg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/mit-engineering-mumbai/about/?viewAsMember=trues" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        </div>

      </div>
    </header>
    <section className="enquiry-section">
      <div className="enquiry-container">
        <div className="enquiry-image">
          <img src={flyer} alt="Enquiry" />
        </div>
        <div className="enquiry-form">
          <h2>Enquiry Form</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          required
                        />

            <label>Email </label>
            <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                        />

            <label>Mobile Number</label>
            <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          required
                        />

            <label>Course</label>
            <select
                          className="form-select"
                          id="course"
                          name="course"
                          required
                        >
                          <option value="">Select a course</option>
                          <option value="Computer Science and Engineering - AI & ML">
                            Computer Science and Engineering - AI & ML
                          </option>
                          <option value="Computer Science Engineering">
                            Computer Science Engineering
                          </option>
                          <option value="Information Technology">
                            Information Technology
                          </option>
                          <option value="Electronics Engineering">
                            Electronics Engineering
                          </option>
                        </select>

            <label>Message</label>
            <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="3"
                        ></textarea>

            <button type="submit">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
    <section className="info-section">
    <div className="info-content">
      <div className="info-text">
        <h1>
        Welcome to MAEER'S MIT MUMBAI 
        </h1>
        <p>
        With over 40 years of academic excellence and a global alumni
                  network exceeding 100,000, MIT is a premier engineering
                  institute approved by AICTE and affiliated with top Indian
                  universities. Known for its commitment to innovation and
                  quality education, MIT empowers students to meet global
                  challenges through cutting-edge learning experiences.
        </p>
        <p>
        Extending the legacy of MIT Pune, we are proud to launch our
                  new Engineering College in the Mumbai Metropolitan Region from
                  the academic year 2025–2026. Set in a nature-inspired campus,
                  the institute offers advanced infrastructure, expert faculty,
                  and a dynamic learning environment that promotes holistic
                  development.
        </p>
        <p>At MIT Mumbai, education is more than a degree it's a
                  transformative journey toward professional and personal
                  excellence</p>
      </div>
      <div className="info-image">
        <img src={collegepic} alt="Classroom" />
      </div>
    </div>
  </section>
  <section className="undergrad-section">
  <div className="programmes-page">
      <div className="container programme-list">
        <h2 data-aos="fade-down">Our Undergraduate Programmes</h2>

        <div className="programme-cards">
          <div className="card" data-aos="fade-up">
            <img src={aiml} alt="CSE AI" />
            <div className="card-body">
              <h5 className="card-title">Computer Science And Engineering(AI/ML)</h5>
              <p className="card-text">
                Learn cutting-edge AI, ML, and automation techniques.
              </p>
             
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <img src={compscience} alt="CSE DS" />
            <div className="card-body">
              <h5 className="card-title">Computer Science And Engineering</h5>
              <p className="card-text">
              Gain proficiency in computer networks, cybersecurity, and system integration to create robust and scalable engineering solutions.
              </p>
             
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <img src={et} alt="Electronics Engineering" />
            <div className="card-body">
              <h5 className="card-title">Electronics Engineering</h5>
              <p className="card-text">
                Design the future with embedded systems and IoT.
              </p>
             
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <img src={it} alt="Information Technology" />
            <div className="card-body">
              <h5 className="card-title">Information Technology</h5>
              <p className="card-text">
                Develop full-stack applications and cloud solutions.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    {/* Highlights */}
    <section className="text-center py-12 highlights bgchange" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10">MIT Legacy at a Glance</h2>
        <div className="highlights-grid">
          {/* Card 1 */}
          <div className="highlight-card card-1">
            <h3 className="text-4xl font-extrabold text-white mb-2">
              <Counter target={40} />+
            </h3>
            <p className="text-gray-100">Years of Academic Excellence</p>
          </div>

          {/* Card 2 */}
          <div className="highlight-card card-2">
            <h3 className="text-4xl font-extrabold text-white mb-2">
              <Counter target={100000} />+
            </h3>
            <p className="text-gray-100">Global Alumni Network</p>
          </div>

          {/* Card 3 */}
          <div className="highlight-card card-3">
            <h3 className="text-4xl font-extrabold text-white mb-2">
              <Counter target={15} />+
            </h3>
            <p className="text-gray-100">
              National & International Collaborations
            </p>
          </div>

          {/* Card 4 */}
          <div className="highlight-card card-4">
            <h3 className="text-4xl font-extrabold text-white mb-2">AICTE</h3>
            <p className="text-gray-100">Approved Programs</p>
          </div>
        </div>
      </section>
  </>
  );
}

export default App;
