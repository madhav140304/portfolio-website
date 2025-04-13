import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!nameRegex.test(formData.name)) {
      alert('Please enter a valid name (letters only)');
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    if (formData.message.trim() === '') {
      alert('Please enter a message');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">Portfolio</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Madhav Mani Tewari</span></h1>
            <p className="subtitle">Web Developer</p>
            <p className="hero-description">Passionate about creating beautiful and functional websites with clean code.</p>
            <div className="hero-buttons">
              <a href="#projects" className="cta-button">View My Work</a>
              <a href="#contact" className="cta-button secondary">Contact Me</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/madhav140304" target="_blank" rel="noopener noreferrer" className="hero-social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/madhav-mani-tewari-0527a128b/" target="_blank" rel="noopener noreferrer" className="hero-social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <img src="/imagehaibhai.jpg" alt="Madhav Mani Tewari" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>As a passionate full-stack developer, I thrive on transforming innovative ideas into elegant, user-friendly applications. With a keen eye for detail and a commitment to writing clean, efficient code, I specialize in creating seamless digital experiences that make a real impact. Whether it's building responsive web applications or solving complex technical challenges, I'm always eager to push the boundaries of what's possible in web development.</p>
          </div>
          <div className="skills">
            <h3>Technologies</h3>
            <div className="skills-grid">
              <div className="skill">HTML5</div>
              <div className="skill">CSS3</div>
              <div className="skill">JavaScript</div>
              <div className="skill">React</div>
              <div className="skill">Node.js</div>
              <div className="skill">Git</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <a href="https://github.com/madhav140304/MUN" target="_blank" rel="noopener noreferrer" className="project-overlay">
              <div className="project-image">
                <div className="overlay-content">
                  <i className="fab fa-github"></i>
                  <span>Go to GitHub</span>
                </div>
              </div>
            </a>
            <h3>Model United Nations Platform</h3>
            <p>A comprehensive platform for organizing and managing Model United Nations conferences.</p>
          </div>
          <div className="project-card">
            <a href="https://github.com/madhav140304/research-bench" target="_blank" rel="noopener noreferrer" className="project-overlay">
              <div className="project-image">
                <div className="overlay-content">
                  <i className="fab fa-github"></i>
                  <span>Go to GitHub</span>
                </div>
              </div>
            </a>
            <h3>Research Collaboration Platform</h3>
            <p>A platform built with TypeScript and Python to facilitate research collaboration and knowledge sharing.</p>
          </div>
          <div className="project-card">
            <a href="https://github.com/madhav140304/quiz-task" target="_blank" rel="noopener noreferrer" className="project-overlay">
              <div className="project-image">
                <div className="overlay-content">
                  <i className="fab fa-github"></i>
                  <span>Go to GitHub</span>
                </div>
              </div>
            </a>
            <h3>LaserTag</h3>
            <p>An interactive quiz platform built with HTML, CSS, and JavaScript, developed during my volunteer work at the LaserTag event.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon location-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Vellore, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon email-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <a href="mailto:madhavmanitewari@gmail.com">madhavmanitewari@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon phone-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <a href="tel:+916306449394">+91 6306449394</a>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://github.com/madhav140304" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/madhav-mani-tewari-0527a128b/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea 
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
            {showSuccess && (
              <div className="success-message">
                Message sent successfully! Thank you for reaching out.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
