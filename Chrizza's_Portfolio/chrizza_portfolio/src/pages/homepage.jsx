import React, { useState, useEffect } from 'react';
// Styles moved inline below; CSS file has been emptied per request.
import profilePic from '../assets/GALES_profile.png';
import cituLogo from '../assets/citu logo.png';
import cjcLogo from '../assets/CJC LOGO.png';
import smspLogo from '../assets/SMSP LOGO.png';
import pcesLogo from '../assets/PCES.png';

const Homepage = () => {
  const inlineStyles = {
    portfolioContainer: { display: 'flex' },
    sideNav: {
      width: '220px',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      background: 'linear-gradient(180deg,#042027,#05272b)',
      display: 'flex',
      alignItems: 'center',
      padding: '20px 8px',
      boxShadow: '4px 0 20px rgba(2,6,23,0.08)'
    },
    sideNavUl: { listStyle: 'none', padding: 0, margin: 0, width: '100%' },
    navLi: { margin: '6px 0' },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 12px',
      color: 'rgba(255,255,255,0.75)',
      textDecoration: 'none',
      fontWeight: 600,
      borderRadius: 10,
      transition: 'all .18s ease',
      fontSize: 15
    },
    navLinkActive: {
      background: 'linear-gradient(90deg,#0ea5a4,#089e9c)',
      color: '#fff',
      boxShadow: '0 6px 18px rgba(14,165,164,0.18)'
    },
    mainContent: { marginLeft: '220px', padding: '28px', width: 'calc(100% - 220px)' },
    contentSection: { minHeight: '60vh', padding: '36px 0' },
    aboutTop: { display: 'flex', alignItems: 'center', gap: 20, maxWidth: '1000px', margin: '0 auto', paddingTop: 6 },
    profilePic: { width: 140, height: 140, borderRadius: 16, objectFit: 'cover', boxShadow: '0 10px 30px rgba(2,6,23,0.08)', border: '2px solid rgba(255,255,255,0.5)' },
    aboutTextH1: { fontSize: '1.8rem', marginBottom: 6 },
    aboutTextP: { color: '#6b7280', lineHeight: 1.5 },
    schoolEntry: { display: 'flex', alignItems: 'center', gap: 14, padding: 12, borderRadius: 8, background: 'linear-gradient(180deg, rgba(14,165,164,0.03), rgba(14,165,164,0.01))', maxWidth: '1000px', margin: '12px auto' },
    schoolLogo: { width: 48, height: 48, objectFit: 'contain', flex: '0 0 48px', borderRadius: 6 },
    schoolTextH3: { fontSize: '1.05rem', margin: 0, color: '#0f172a' },
    schoolTextH4: { fontSize: '0.95rem', margin: '2px 0', color: '#6b7280' },
    schoolTextH5: { fontSize: '0.85rem', margin: 0, color: '#6b7280' },
    skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 12, padding: 0 },
    skillsItem: { background: '#f8fafc', padding: '10px 12px', borderRadius: 10, listStyle: 'none', color: '#0f172a', fontWeight: 600 }
  };
  const [activeSection, setActiveSection] = useState('about');
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredProject, setHoveredProject] = useState(null);

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
  
  const handleNavClick = (id, e) => {
    // Prevent full page reload from links and smoothly scroll to section
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
    // Update the hash without causing reload
    try {
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', `#${id}`);
      } else {
        window.location.hash = id;
      }
    } catch (err) {
      // ignore
    }
  };

  // Intersection observer to reveal sections when they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.18 }
    );

    const els = document.querySelectorAll('.content-section');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 'hano',
      title: 'Hano',
      desc: 'Interactive Vocabulary Learning Platform for hearing-impaired Grade 3 students.',
      tech: 'React, Django'
    },
    {
      id: 'campuscart',
      title: 'CampusCart',
      desc: 'Marketplace app for campus products.',
      tech: 'Kotlin, JavaScript'
    },
    {
      id: 'adopt-a-pet',
      title: 'Adopt-A-Pet',
      desc: 'Pet adoption web application for shelters and adopters.',
      tech: 'React, Django'
    }
  ];

  const skills = [
    { name: 'HTML & CSS', pct: 90 },
    { name: 'JavaScript', pct: 85 },
    { name: 'React', pct: 88 },
    { name: 'Node.js', pct: 75 }
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chrizzaarniegales.official@gmail.com');
      alert('Email copied to clipboard');
    } catch (err) {
      // fallback
      prompt('Copy email', 'chrizzaarniegales.official@gmail.com');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-container">
  <nav style={inlineStyles.sideNav} aria-label="Primary">
        <ul style={inlineStyles.sideNavUl}>
          <li style={inlineStyles.navLi}>
            <a href="#about" onClick={(e) => handleNavClick('about', e)} style={activeSection === 'about' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink}>About</a>
          </li>
          <li style={inlineStyles.navLi}>
            <a href="#educational-background" onClick={(e) => handleNavClick('educational-background', e)} style={activeSection === 'educational-background' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink}>Educational Background</a>
          </li>
          <li style={inlineStyles.navLi}>
            <a href="#skills" onClick={(e) => handleNavClick('skills', e)} style={activeSection === 'skills' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink}>Skills</a>
          </li>
          <li style={inlineStyles.navLi}>
            <a href="#projects" onClick={(e) => handleNavClick('projects', e)} style={activeSection === 'projects' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink}>Projects</a>
          </li>
          <li style={inlineStyles.navLi}>
            <a href="#certifications&awards" onClick={(e) => handleNavClick('certifications&awards', e)} style={activeSection === 'certifications&awards' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink}>Certifications & Awards</a>
          </li>
          <li style={inlineStyles.navLi}>
            <a href="#contact" onClick={(e) => handleNavClick('contact', e)} style={activeSection === 'contact' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink}>Contact</a>
          </li>
        </ul>
      </nav>

      <main style={inlineStyles.mainContent}>
        {/* About */}
        <section id="about" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 600ms cubic-bezier(.2,.9,.2,1)',
          transform: visibleSections.has('about') ? 'none' : 'translateY(18px)',
          opacity: visibleSections.has('about') ? 1 : 0
        }}>
          <div style={inlineStyles.aboutTop}>
            <img src={profilePic} alt="Chrizza Arnie Gales" style={inlineStyles.profilePic} />
            <div style={{ flex: 1 }}>
              <h1 style={inlineStyles.aboutTextH1}>Welcome!</h1>
              <h2 style={{ margin: '6px 0' }}>My name is Chrizza Arnie Gales</h2>
              <h4 style={{ margin: '6px 0' }}>Frontend Developer | UI/UX Design | Mobile App Development | Quality Assurance</h4>
              <p style={inlineStyles.aboutTextP}>Aspiring and hard-working IT student with hands-on experience in frontend and mobile development, UI/UX design, and quality testing. I build accessible and performant user interfaces with care.</p>
            </div>
          </div>
        </section>

        {/* Educational Background */}
        <section id="educational-background" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 600ms cubic-bezier(.2,.9,.2,1)',
          transform: visibleSections.has('educational-background') ? 'none' : 'translateY(18px)',
          opacity: visibleSections.has('educational-background') ? 1 : 0
        }}>
          <h1 style={{ margin: '0 0 12px' }}>Educational Background</h1>
          <div style={inlineStyles.schoolEntry}>
            <img src={cituLogo} alt="Cebu Institute of Technology logo" style={inlineStyles.schoolLogo} />
            <div>
              <h3 style={inlineStyles.schoolTextH3}>Cebu Institute of Technology - University</h3>
              <h4 style={inlineStyles.schoolTextH4}>Bachelor of Science in Information Technology</h4>
              <h5 style={inlineStyles.schoolTextH5}>August 2022 - Present</h5>
            </div>
          </div>
          <div style={inlineStyles.schoolEntry}>
            <img src={cjcLogo} alt="Cor Jesu College logo" style={inlineStyles.schoolLogo} />
            <div>
              <h3 style={inlineStyles.schoolTextH3}>Cor Jesu College</h3>
              <h4 style={inlineStyles.schoolTextH4}>Bachelor of Science in Computer Science</h4>
              <h5 style={inlineStyles.schoolTextH5}>August 2021 - May 2022</h5>
            </div>
          </div>
          <div style={inlineStyles.schoolEntry}>
            <img src={smspLogo} alt="Saint Michael's School of Padada logo" style={inlineStyles.schoolLogo} />
            <div>
              <h3 style={inlineStyles.schoolTextH3}>Saint Michael's School of Padada</h3>
              <h4 style={inlineStyles.schoolTextH4}>Senior High School</h4>
              <h5 style={inlineStyles.schoolTextH5}>June 2017 - March 2019</h5>
            </div>
          </div>
          <div style={inlineStyles.schoolEntry}>
            <img src={smspLogo} alt="Saint Michael's School of Padada logo" style={inlineStyles.schoolLogo} />
            <div>
              <h3 style={inlineStyles.schoolTextH3}>Saint Michael's School of Padada</h3>
              <h4 style={inlineStyles.schoolTextH4}>Junior High School</h4>
              <h5 style={inlineStyles.schoolTextH5}>June 2013 - March 2017</h5>
            </div>
          </div>
          <div style={inlineStyles.schoolEntry}>
            <img src={pcesLogo} alt="Padada Central Elementary School logo" style={inlineStyles.schoolLogo} />
            <div>
              <h3 style={inlineStyles.schoolTextH3}>Padada Central Elementary School</h3>
              <h4 style={inlineStyles.schoolTextH4}>Elementary</h4>
              <h5 style={inlineStyles.schoolTextH5}>June 2007 - March 2013</h5>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 600ms cubic-bezier(.2,.9,.2,1)',
          transform: visibleSections.has('skills') ? 'none' : 'translateY(18px)',
          opacity: visibleSections.has('skills') ? 1 : 0
        }}>
          <h2>My Skills</h2>
          <div>
            {skills.map((s) => (
              <div key={s.name} style={{ margin: '10px 0', maxWidth: 520 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <strong>{s.name}</strong>
                  <span style={{ color: '#6b7280' }}>{s.pct}%</span>
                </div>
                <div style={{ height: 10, background: '#e6eef0', borderRadius: 8, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: visibleSections.has('skills') ? `${s.pct}%` : '4%', background: 'linear-gradient(90deg,#0ea5a4,#089e9c)', transition: 'width 1000ms ease' }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 600ms cubic-bezier(.2,.9,.2,1)',
          transform: visibleSections.has('projects') ? 'none' : 'translateY(18px)',
          opacity: visibleSections.has('projects') ? 1 : 0
        }}>
          <h2>My Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 16 }}>
            {projects.map((p) => {
              const hovered = hoveredProject === p.id;
              return (
                <div key={p.id} role="button" tabIndex={0} onFocus={() => setHoveredProject(p.id)} onBlur={() => setHoveredProject(null)} onMouseEnter={() => setHoveredProject(p.id)} onMouseLeave={() => setHoveredProject(null)} style={{
                  background: '#fff', padding: 14, borderRadius: 12, boxShadow: hovered ? '0 16px 40px rgba(2,6,23,0.12)' : '0 8px 30px rgba(2,6,23,0.06)',
                  transform: hovered ? 'translateY(-8px)' : 'none', transition: 'all 250ms ease', cursor: 'pointer'
                }}>
                  <h3 style={{ marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: '#6b7280' }}>{p.desc}</p>
                  <p style={{ fontSize: 13, color: '#0f172a' }}><strong>Tech:</strong> {p.tech}</p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <a href={`#projects`} onClick={(e) => { e.preventDefault(); alert('Open demo or repo'); }} style={{ padding: '8px 10px', background: '#0ea5a4', color: '#fff', borderRadius: 8, textDecoration: 'none' }}>View</a>
                    <a href={`#projects`} onClick={(e) => { e.preventDefault(); alert('Open details'); }} style={{ padding: '8px 10px', background: '#eef6f9', color: '#0f172a', borderRadius: 8, textDecoration: 'none' }}>Details</a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications&achievements" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 600ms cubic-bezier(.2,.9,.2,1)',
          transform: visibleSections.has('certifications&achievements') ? 'none' : 'translateY(18px)',
          opacity: visibleSections.has('certifications&achievements') ? 1 : 0
        }}>
          <h2>Certifications & Achievements</h2>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ minWidth: 220 }}>
              <h3>Certificates</h3>
              <ul>
                <li>AWS Cloud Foundations</li>
                <li>AWS Cloud Architecture</li>
                <li>CodeChum Java Programming</li>
              </ul>
            </div>
            <div style={{ minWidth: 220 }}>
              <h3>Achievements</h3>
              <ul>
                <li>PitchPerfect 2025 x TechCon 2025 Finalist</li>
                <li>6th International Congress on eLearning 2025 Research Presenter</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 600ms cubic-bezier(.2,.9,.2,1)',
          transform: visibleSections.has('contact') ? 'none' : 'translateY(18px)',
          opacity: visibleSections.has('contact') ? 1 : 0
        }}>
          <h2>Contact Me</h2>
          <h4>You can reach me via:</h4>
          <p><strong>chrizzaarniegales.official@gmail.com</strong> <button onClick={copyEmail} style={{ marginLeft: 8, padding: '6px 8px', borderRadius: 8 }}>Copy</button></p>
          <p>Or find me on <a href="https://linkedin.com/in/chrizza-arnie-gales-283a78380" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://github.com/github.com/Chizzwiz" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;