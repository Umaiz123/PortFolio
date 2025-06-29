import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Add animation classes when component mounts
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    });

    const elements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Mohammed Umaiz.N</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Web Developer</h2>
              <p className="hero-description">
                Passionate about creating innovative web solutions with modern
                technologies. Specialized in React, Node.js,Crypto,NFT's and
                full-stack development.
              </p>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/Umaiz123"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-umaiz-n-817b2a321"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="profile-card">
                <div className="profile-avatar">
                  <div className="avatar-placeholder">
                    <span>MD</span>
                  </div>
                </div>
                <div className="tech-stack">
                  <div className="tech-item">React</div>
                  <div className="tech-item">Node.js</div>
                  <div className="tech-item">Python</div>
                  <div className="tech-item">PostgreSQL</div>
                  <div className="tech-item">JavaScipt</div>
                  <div className="tech-item">MySQL</div>
                  <div className="tech-item">Cursor</div>
                  <div className="tech-item">Motoko</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.button
            className="scroll-down"
            onClick={scrollToAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <FaArrowDown />
          </motion.button>
        </div>
      </section>

      {/* Intro Section */}
      <section id="about-section" className="intro section">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              className="intro-content slide-in-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">About Me</h2>
              <p className="intro-text">
                I'm a dedicated Full Stack Web Developer with a passion for
                creating exceptional digital experiences. With expertise in both
                frontend and backend technologies, I bring ideas to life through
                clean, efficient, and scalable code.
              </p>
              <p className="intro-text">
                My journey in web development started with curiosity and has
                evolved into a deep understanding of modern web technologies. I
                specialize in React.js for dynamic user interfaces, Node.js for
                robust backend solutions, and PostgreSQL for reliable data
                management.
              </p>
              <div className="intro-stats">
                <div className="stat">
                  <span className="stat-number">0+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="intro-skills slide-in-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Core Technologies</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">HTML/CSS</span>
                    <span className="skill-tag">Bootstrap</span>
                    <span className="skill-tag">Ant Design</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">EJS</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Database & Tools</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">Render</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Web3 Decentralization Development</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Internet Computer</span>
                    <span className="skill-tag">Motoko</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
