import React, { useState, useEffect } from 'react';
import './homepage.css';
import profilePic from '../assets/GALES_profile.png';

const Homepage = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-container">
      <nav className="side-nav">
        <ul>
          <li><a href="/#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="/#educational-background" className={activeSection === 'educational-background' ? 'active' : ''}>Educational Background</a></li>
          <li><a href="/#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="/#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="/#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <section id="about" className="content-section">
          <div className="about-top">
            <img src={profilePic} alt="Chrizza Arnie Gales" className="profile-pic" />
            <div className="about-text">
              <h1>Welcome!</h1>
              <p>I am Chrizza Arnie Gales. I'm a passionate developer who loves building amazing web experiences.</p>
              <p>Feel free to add more about yourself here, like your background, education, or career goals.</p>
            </div>
          </div>
        </section>

        <section id="educational-background" className="content-section">
          <h1>Educational Background</h1>
          <p>Hi, I'm Chrizza. I'm a passionate developer who loves building amazing web experiences.</p>
          <p>Feel free to add more about yourself here, like your background, education, or career goals.</p>
        </section>

        <section id="skills" className="content-section">
          <h2>My Skills</h2>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
            {/* Add more skills here */}
          </ul>
        </section>

        <section id="projects" className="content-section">
          <h2>My Projects</h2>
          <div>
            <h3>Project One</h3>
            <p>Description of your first project. Talk about the technology used and your role.</p>
          </div>
        </section>

        <section id="contact" className="content-section">
          <h2>Contact Me</h2>
          <p>You can reach me via email at: <strong>your.email@example.com</strong></p>
          <p>Or find me on <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;