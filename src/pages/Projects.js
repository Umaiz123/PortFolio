import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFilter } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Travel Tracker Web Application",
      description:
        "Developed a Travel Tracker web app using Node.js, Express.js, and PostgreSQL, enabling users to log and manage visited locations with persistent data storage and dynamic routing.",
      image: "../Images/Travel.JPG",
      tech: ["Node.js", "Express.js", "PostgreSQL"],
      category: "fullstack",
      github: "https://github.com/Umaiz123/Travel-Tracker",
      demo: "https://travel-tracker-btou.onrender.com/",
      featured: true,
    },
    {
      id: 2,
      title: "Crypto App",
      description:
        "Developed a responsive crypto tracking app using React.js and Ant Design, featuring real-time data from public APIs with search, filter, and coin detail views for a smooth user experience.",
      image: "../Images/Crypto.JPG",
      tech: ["React.js", "Ant-Design", "Redux-ToolKit", "Api-Integration"],
      category: "frontend",
      github: "https://github.com/Umaiz123/Crypto-App",
      demo: "https://umaiz123.github.io/Crypto-App",
      featured: true,
    },
    {
      id: 3,
      title: "Blog-API-Project",
      description:
        "Created a RESTful blog API using Node.js and Express, supporting CRUD operations with proper routing and middleware, and deployed the application on Render for public access.",
      image: "../Images/Blog.JPG",
      tech: ["NodeJS", "ExpressJS", "Middlewares", "Render"],
      category: "backend",
      github: "https://github.com/Umaiz123/Blog-API-Project",
      demo: "https://api-frontend-i7i7.onrender.com",
      featured: false,
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "Built a responsive e-commerce website using React.js, Styled Components, and Context API, featuring product listings, cart management, and dynamic state handling for a seamless shopping experience.",
      image: "/Images/Ecommerce.JPG",
      tech: ["React.js", "Styled-Components", "ContextAPi"],
      category: "frontend",
      github: "https://github.com/Umaiz123/E-Commerce",
      demo: "https://umaiz123.github.io/E-Commerce",
      featured: false,
    },
    {
      id: 5,
      title: "Simon-Game",
      description:
        "Built a classic Simon memory game using HTML, CSS and JavaScript(jQuery) to reinforce front-end development fundamentals. Designed game logic to dynamically generate color sequences and validate user input in real-time.",
      image: "../Images/Simon.JPG",
      tech: ["HTML", "CSS", "JavaScipt", "JQuery"],
      category: "frontend",
      github: "https://github.com/Umaiz123/Simon-Game",
      demo: "https://umaiz123.github.io/Simon-Game/",
      featured: false,
    },
    {
      id: 6,
      title: "Keepers-APP",
      description:
        "Built a responsive notes management application using React that allows users to create and delete notes in real-time. Implemented CRUD operations, dynamic rendering with component-based architecture, and used React Hooks for state management to ensure smooth user experience.",
      image: "../Images/Keeper.JPG",
      tech: ["HTML", "CSS", "JavaScipt", "React"],
      category: "frontend",
      github: "https://github.com/Umaiz123/Keepers_App",
      demo: "https://umaiz123.github.io/Keepers_App",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <motion.div
            className="projects-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-subtitle">
              A collection of my work showcasing various technologies and
              solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section section">
        <div className="container">
          {/* Filter Buttons */}
          <motion.div
            className="filter-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${
                    filter === category.id ? "active" : ""
                  }`}
                  onClick={() => setFilter(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects */}
          {filter === "all" && (
            <motion.div
              className="featured-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="featured-title">Featured Projects</h2>
              <div className="projects-grid featured-grid">
                {projects
                  .filter((project) => project.featured)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="project-card featured"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                        <div className="project-overlay">
                          <div className="project-links">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                            >
                              <FaGithub />
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                            >
                              <FaExternalLinkAlt />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">
                          {project.description}
                        </p>
                        <div className="project-tech">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* All Projects */}
          <motion.div
            className="all-projects-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: filter === "all" ? 0.8 : 0.4 }}
          >
            {filter !== "all" && (
              <h2 className="section-title">
                {categories.find((cat) => cat.id === filter)?.label}
              </h2>
            )}

            <div className="projects-grid">
              {filteredProjects
                .filter((project) =>
                  filter === "all" ? !project.featured : true
                )
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: (filter === "all" ? 1 : 0.6) + index * 0.1,
                    }}
                  >
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <div className="project-links">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FaGithub />
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="project-tech">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
