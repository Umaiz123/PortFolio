import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import "./Resume.css";

const Resume = () => {
  const experience = [
    {
      title: "Cyber Intern",
      company: "Prinston Smart Engineers",
      period: "Sept 2023 - OCT 2023",
      description: [
        "Assisted in conducting vulnerability assessments and penetration testing to identify and mitigate security risks.",
        "Participated in the incident response process including identifying, analyzing, and mitigating security incidents.",
        "Was Able to penetrate into WPS/WPS-2 Networks with the help of Kali-Linux and its tools such as Aircrack-ng etc.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University",
      period: "2020 - 2021",
      description:
        "Focused on web development and software engineering principles",
    },
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: <FaCode />,
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Ant Design",
        "jQuery",
      ],
    },
    {
      category: "Backend Development",
      icon: <FaServer />,
      skills: ["Node.js", "Express.js", "Python", "EJS", "RESTful APIs"],
    },
    {
      category: "Database & Tools",
      icon: <FaDatabase />,
      skills: [
        "PostgreSQL",
        "Git",
        "GitHub",
        "Render",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <div className="resume">
      {/* Hero Section */}
      <section className="resume-hero">
        <div className="container">
          <motion.div
            className="resume-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="resume-title">Resume</h1>
            <p className="resume-subtitle">
              Download my resume or explore my experience and skills
            </p>
            <a
              href="/Mohd_Umaiz_Profile.pdf"
              download="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-resume-btn"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="resume-content section">
        <div className="container">
          <div className="resume-grid">
            {/* Experience */}
            <motion.div
              className="resume-section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-header">
                <FaBriefcase className="section-icon" />
                <h2>Experience</h2>
              </div>

              <div className="timeline">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="job-header">
                        <h3 className="job-title">{job.title}</h3>
                        <span className="job-company">{job.company}</span>
                        <span className="job-period">{job.period}</span>
                      </div>
                      <ul className="job-description">
                        {job.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="resume-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="section-header">
                <FaGraduationCap className="section-icon" />
                <h2>Education</h2>
              </div>

              <div className="education-list">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <h3 className="degree">{edu.degree}</h3>
                    <span className="institution">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                    <p className="description">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">Technical Skills</h2>

            <div className="skills-grid">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={index}
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="skill-category-header">
                    <div className="skill-icon">{skillCategory.icon}</div>
                    <h3>{skillCategory.category}</h3>
                  </div>
                  <div className="skill-list">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="additional-info"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="info-grid">
              <div className="info-card">
                <h3>Languages</h3>
                <p>
                  English
                  (Fluent),Kanada(Intermediate),Urdu(Fluent),Hindi(Fluent)
                </p>
              </div>
              <div className="info-card">
                <h3>Certifications</h3>
                <p>
                  <a
                    href="/Full_Stack_Certificate.pdf"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Full Stack Web Developer
                  </a>
                </p>
              </div>
              <div className="info-card">
                <h3>Interests</h3>
                <p>Open Source Development, Web Performance, BlockChain</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
