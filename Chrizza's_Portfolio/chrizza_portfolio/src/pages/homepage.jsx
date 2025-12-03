import React, { useState, useEffect, useRef } from 'react';
import profilePic from '../assets/GALES_profile.png';
import cituLogo from '../assets/citu logo.png';
import cjcLogo from '../assets/CJC LOGO.png';
import smspLogo from '../assets/SMSP LOGO.png';
import pcesLogo from '../assets/PCES.png';
import hanoImage from '../assets/hano.png';
import marketplaceImage from '../assets/marketplace.png';
import adoptapetImage from '../assets/adoptapet.png';
import linkedinLogo from '../assets/linkedin-logo-png-1854.png';
import githubLogo from '../assets/github.png';
import emailLogo from '../assets/gmail.png';
import javaLogo from '../assets/java.png';
import pythonLogo from '../assets/python.png';
import kotlinLogo from '../assets/kotlin.png';
import javascriptLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import frontendLogo from '../assets/frontend.jpg';
import mobileAppLogo from '../assets/mobile app.jpg';
import qaLogo from '../assets/qa.jpg';
import webDesignLogo from '../assets/webdesign.jpg';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const typingIndexRef = useRef(0);
  const fullText = "Welcome! I'm Chrizza Arnie Gales";
  const glassCardBackground = 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))';
  
  const inlineStyles = {
    portfolioContainer: { 
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg,rgb(129, 193, 170) 0%, #b4e8d4 50%, #ffd3e1 100%)',
      minHeight: '100vh',
      width: '100%'
    },
    animatedBackground: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      background: 'radial-gradient(circle at 20% 50%, rgba(168, 230, 207, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 211, 225, 0.2) 0%, transparent 50%)',
      pointerEvents: 'none',
      animation: 'gradientShift 15s ease infinite'
    },
    topNav: {
      width: '100%',
      height: 'auto',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(180deg,#042027,#05272b)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 20px',
      boxShadow: '0 4px 20px rgba(2,6,23,0.15)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(14, 165, 164, 0.1)',
      boxSizing: 'border-box',
      margin: 0,
      transform: 'translateZ(0)',
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden'
    },
    topNavUl: { 
      listStyle: 'none', 
      padding: 0, 
      margin: 0, 
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px'
    },
    navLi: { margin: 0, position: 'relative' },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px 20px',
      color: 'rgba(255,255,255,0.75)',
      textDecoration: 'none',
      fontWeight: 600,
      borderRadius: 12,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '15px',
      position: 'relative',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    navLinkActive: {
      background: 'linear-gradient(135deg, #7dd3c0, #a8e6cf, #ffc0cb, #ffb3ba)',
      color: '#000',
      fontWeight: 800,
      boxShadow: '0 8px 24px rgba(125, 211, 192, 0.35)',
      transform: 'translateY(-2px)'
    },
    mainContent: { 
      marginLeft: 0,
      marginTop: '80px',
      padding: '60px 50px', 
      width: '100%',
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    contentSection: { 
      minHeight: '70vh', 
      padding: '60px 0',
      position: 'relative',
      marginBottom: '40px',
      width: '100%',
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    aboutTop: { 
      display: 'flex', 
      alignItems: 'center', 
      gap: '60px', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '60px 40px',
      position: 'relative',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    aboutTextContainer: {
      flex: '1 1 500px',
      minWidth: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    aboutImageContainer: {
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    profilePic: { 
      width: '350px', 
      height: '350px', 
      borderRadius: '50%', 
      objectFit: 'cover', 
      border: '4px solid #0f172a',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      zIndex: 2,
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      maxWidth: '100%'
    },
    aboutGreeting: {
      fontSize: '1.5rem',
      color: '#475569',
      fontWeight: 500,
      margin: 0,
      marginBottom: '8px'
    },
    aboutName: {
      fontSize: '3.5rem',
      color: '#0f172a',
      fontWeight: 700,
      margin: 0,
      marginBottom: '16px',
      lineHeight: 1.2
    },
    aboutTitle: {
      fontSize: '1.8rem',
      color: '#1e293b',
      fontWeight: 600,
      margin: 0,
      marginBottom: '20px'
    },
    aboutTextP: { 
      color: '#475569', 
      lineHeight: 1.8,
      fontSize: '1.1rem',
      marginTop: 16
    },
    schoolEntry: { 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      gap: 16, 
      padding: '32px 24px', 
      borderRadius: 24, 
      background: glassCardBackground,
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid rgba(125, 211, 192,0.15)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 320,
      width: '100%',
      height: 320,
      boxSizing: 'border-box'
    },
    schoolLogo: { 
      width: 80, 
      height: 80, 
      objectFit: 'contain', 
      borderRadius: 16,
      padding: 12,
      background: 'linear-gradient(135deg, rgba(125, 211, 192,0.1), rgba(168, 230, 207,0.05))',
      transition: 'all 0.4s ease',
      boxShadow: '0 4px 16px rgba(125, 211, 192,0.15)'
    },
    schoolTextH3: { fontSize: '1.15rem', margin: '0 0 8px', color: '#0f172a', fontWeight: 700, textAlign: 'center', lineHeight: 1.4 },
    schoolTextH4: { fontSize: '0.95rem', margin: '0 0 6px', color: '#475569', fontWeight: 500, textAlign: 'center' },
    schoolTextH5: { fontSize: '0.85rem', margin: 0, color: '#64748b', fontWeight: 400, textAlign: 'center', padding: '8px 12px', background: 'rgba(125, 211, 192,0.1)', borderRadius: 12, display: 'inline-block' },
    skillsGrid: { 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: 24, 
      padding: 0,
      maxWidth: '1000px',
      width: '100%',
      margin: '0 auto',
      justifyContent: 'center'
    },
    skillsItem: { 
      background: glassCardBackground,
      padding: '16px', 
      borderRadius: 18, 
      listStyle: 'none', 
      boxShadow: '0 10px 28px rgba(15,23,42,0.08)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid transparent',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      width: '100%',
      aspectRatio: '1 / 1',
      gap: 10
    },
    skillImage: {
      width: '68%',
      height: '68%',
      objectFit: 'contain',
      borderRadius: 8,
      flexShrink: 0,
      display: 'block',
      margin: '0 auto'
    },
    skillLabel: {
      marginTop: 10,
      fontSize: '0.9rem',
      fontWeight: 600,
      color: '#0f172a',
      textAlign: 'center'
    }
  };
  const [activeSection, setActiveSection] = useState('about');
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredSchool, setHoveredSchool] = useState(null);

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
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
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
      tech: 'React, Django',
      image: hanoImage
    },
    {
      id: 'campuscart',
      title: 'CampusCart',
      desc: 'An online marketplace designed to help students browse and manage campus-related products.',
      tech: 'Kotlin, JavaScript',
      image: marketplaceImage
    },
    {
      id: 'adopt-a-pet',
      title: 'Adopt-A-Pet',
      desc: 'Pet adoption web application for shelters and adopters.',
      tech: 'React, Django',
      image: adoptapetImage
    }
  ];

  const skills = [
    { name: 'Java', image: javaLogo },
    { name: 'Python', image: pythonLogo },
    { name: 'Kotlin', image: kotlinLogo },
    { name: 'JavaScript', image: javascriptLogo },
    { name: 'React', image: reactLogo },
    { name: 'Mobile App Development', image: mobileAppLogo },
    { name: 'Frontend Development', image: frontendLogo },
    { name: 'Quality Assurance', image: qaLogo },
    { name: 'Web Design', image: webDesignLogo }
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chrizzaarniegales.official@gmail.com');
      const btn = document.querySelector('[data-email-btn]');
      if (btn) {
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#10b981';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 2000);
      }
    } catch (err) {
      prompt('Copy email', 'chrizzaarniegales.official@gmail.com');
    }
  };

  useEffect(() => {
    typingIndexRef.current = 0;
    setTypingText('');
    setShowCursor(true);
    
    const typeInterval = setInterval(() => {
      if (typingIndexRef.current < fullText.length) {
        typingIndexRef.current += 1;
        setTypingText(fullText.slice(0, typingIndexRef.current));
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      if (typingIndexRef.current >= fullText.length) {
        setShowCursor(prev => !prev);
      }
    }, 530);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [fullText]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      .skill-hover-effect::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(125, 211, 192,0.2) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        transition: width 0.6s ease, height 0.6s ease;
      }
      .skill-hover-effect:hover::before {
        width: 300px;
        height: 300px;
      }
      
      /* Fix nav glitches - hardware acceleration and smooth rendering */
      .portfolio-container nav {
        transform: translateZ(0) !important;
        -webkit-transform: translateZ(0) !important;
        will-change: transform !important;
        backface-visibility: hidden !important;
        -webkit-backface-visibility: hidden !important;
        contain: layout style paint !important;
      }
      
      /* Responsive Styles */
      @media (max-width: 1024px) {
        .portfolio-container main {
          padding: 40px 30px !important;
        }
      }
      
      @media (max-width: 768px) {
        .portfolio-container nav {
          padding: 12px 10px !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 1000 !important;
        }
        .portfolio-container main {
          margin-top: 70px !important;
          padding: 20px 15px !important;
        }
        .portfolio-container nav ul {
          gap: 4px !important;
        }
        .portfolio-container nav a {
          padding: 8px 12px !important;
          font-size: 13px !important;
        }
      }
      
      @media (max-width: 480px) {
        .portfolio-container nav {
          padding: 10px 8px !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 1000 !important;
        }
        .portfolio-container main {
          margin-top: 65px !important;
          padding: 15px 10px !important;
        }
        .portfolio-container nav a {
          padding: 6px 8px !important;
          font-size: 11px !important;
        }
        .portfolio-container nav ul {
          gap: 2px !important;
        }
      }
      
      /* Ensure all sections are centered */
      .content-section {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
      }
      
      /* Responsive grid adjustments */
      @media (max-width: 768px) {
        .skills-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 16px !important;
        }
        .education-grid {
          grid-template-columns: 1fr !important;
        }
        .projects-grid {
          grid-template-columns: 1fr !important;
        }
      }
      
      @media (max-width: 480px) {
        .skills-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 12px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="portfolio-container" style={inlineStyles.portfolioContainer}>
      <div style={inlineStyles.animatedBackground} />
      <div 
        style={{
          position: 'fixed',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(125, 211, 192,0.15) 0%, transparent 70%)',
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
          filter: 'blur(40px)'
        }}
      />
      <nav style={{
        ...inlineStyles.topNav,
        padding: windowWidth <= 768 ? '12px 10px' : '16px 20px',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }} aria-label="Primary">
        <ul style={{
          ...inlineStyles.topNavUl,
          gap: '8px'
        }}>
          <li style={inlineStyles.navLi}>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick('about', e)} 
              style={{
                ...(activeSection === 'about' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink),
                fontSize: windowWidth <= 480 ? '12px' : windowWidth <= 768 ? '13px' : '15px',
                padding: windowWidth <= 480 ? '8px 10px' : windowWidth <= 768 ? '10px 12px' : '12px 16px'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== 'about') {
                  e.target.style.background = 'rgba(168, 230, 207, 0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'about') {
                  e.target.style.background = '';
                  e.target.style.transform = '';
                }
              }}
            >
              About
            </a>
          </li>
          <li style={inlineStyles.navLi}>
            <a 
              href="#educational-background" 
              onClick={(e) => handleNavClick('educational-background', e)} 
              style={{
                ...(activeSection === 'educational-background' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink),
                fontSize: windowWidth <= 480 ? '11px' : windowWidth <= 768 ? '12px' : '15px',
                padding: windowWidth <= 480 ? '8px 10px' : windowWidth <= 768 ? '10px 12px' : '12px 16px'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== 'educational-background') {
                  e.target.style.background = 'rgba(125, 211, 192,0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'educational-background') {
                  e.target.style.background = '';
                  e.target.style.transform = '';
                }
              }}
            >
              Educational Background
            </a>
          </li>
          <li style={inlineStyles.navLi}>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick('skills', e)} 
              style={{
                ...(activeSection === 'skills' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink),
                fontSize: windowWidth <= 480 ? '12px' : windowWidth <= 768 ? '13px' : '15px',
                padding: windowWidth <= 480 ? '8px 10px' : windowWidth <= 768 ? '10px 12px' : '12px 16px'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== 'skills') {
                  e.target.style.background = 'rgba(125, 211, 192,0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'skills') {
                  e.target.style.background = '';
                  e.target.style.transform = '';
                }
              }}
            >
              Skills
            </a>
          </li>
          <li style={inlineStyles.navLi}>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick('projects', e)} 
              style={{
                ...(activeSection === 'projects' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink),
                fontSize: windowWidth <= 480 ? '12px' : windowWidth <= 768 ? '13px' : '15px',
                padding: windowWidth <= 480 ? '8px 10px' : windowWidth <= 768 ? '10px 12px' : '12px 16px'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== 'projects') {
                  e.target.style.background = 'rgba(125, 211, 192,0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'projects') {
                  e.target.style.background = '';
                  e.target.style.transform = '';
                }
              }}
            >
              Projects
            </a>
          </li>
          <li style={inlineStyles.navLi}>
            <a 
              href="#certifications&awards" 
              onClick={(e) => handleNavClick('certifications&awards', e)} 
              style={{
                ...(activeSection === 'certifications&awards' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink),
                fontSize: windowWidth <= 480 ? '10px' : windowWidth <= 768 ? '11px' : '15px',
                padding: windowWidth <= 480 ? '8px 10px' : windowWidth <= 768 ? '10px 12px' : '12px 16px'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== 'certifications&awards') {
                  e.target.style.background = 'rgba(125, 211, 192,0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'certifications&awards') {
                  e.target.style.background = '';
                  e.target.style.transform = '';
                }
              }}
            >
              Certifications & Awards
            </a>
          </li>
          <li style={inlineStyles.navLi}>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick('contact', e)} 
              style={{
                ...(activeSection === 'contact' ? { ...inlineStyles.navLink, ...inlineStyles.navLinkActive } : inlineStyles.navLink),
                fontSize: windowWidth <= 480 ? '8px 10px' : windowWidth <= 768 ? '13px' : '15px',
                padding: windowWidth <= 480 ? '8px 10px' : windowWidth <= 768 ? '10px 12px' : '12px 16px'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== 'contact') {
                  e.target.style.background = 'rgba(125, 211, 192,0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'contact') {
                  e.target.style.background = '';
                  e.target.style.transform = '';
                }
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main style={{
        ...inlineStyles.mainContent,
        marginTop: windowWidth <= 768 ? '70px' : windowWidth <= 480 ? '65px' : '80px',
        padding: windowWidth <= 768 ? '20px 15px' : windowWidth <= 1024 ? '40px 30px' : '60px 50px',
        width: '100%'
      }}>
        {/* About */}
        <section id="about" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: visibleSections.has('about') ? 'none' : 'translateY(30px)',
          opacity: visibleSections.has('about') ? 1 : 0,
          background: 'linear-gradient(135deg, #7dd3c0 0%, #a8e6cf 100%)',
          padding: windowWidth <= 768 ? '40px 15px' : '80px 20px',
          minHeight: 'auto'
        }}>
          <div style={{
            ...inlineStyles.aboutTop,
            flexDirection: windowWidth <= 768 ? 'column' : 'row',
            textAlign: windowWidth <= 768 ? 'center' : 'left',
            padding: windowWidth <= 768 ? '40px 20px' : '60px 40px',
            gap: windowWidth <= 768 ? '40px' : '60px'
          }}>
            <div style={{
              ...inlineStyles.aboutTextContainer,
              alignItems: windowWidth <= 768 ? 'center' : 'flex-start',
              textAlign: windowWidth <= 768 ? 'center' : 'left'
            }}>
              <h2 style={{
                ...inlineStyles.aboutGreeting,
                fontSize: windowWidth <= 480 ? '1.2rem' : windowWidth <= 768 ? '1.3rem' : '1.5rem',
                animation: visibleSections.has('about') ? 'slideInLeft 0.8s ease-out' : 'none'
              }}>
                Welcome!
              </h2>
              <h1 style={{
                ...inlineStyles.aboutName,
                fontSize: windowWidth <= 480 ? '2rem' : windowWidth <= 768 ? '2.5rem' : '3.5rem',
                animation: visibleSections.has('about') ? 'slideInLeft 0.8s ease-out 0.2s both' : 'none',
          opacity: visibleSections.has('about') ? 1 : 0
        }}>
                I'm Chrizza Arnie Gales
              </h1>
              <h3 style={{
                ...inlineStyles.aboutTitle,
                fontSize: windowWidth <= 480 ? '0.9rem' : windowWidth <= 768 ? '1rem' : '1.3rem',
                animation: visibleSections.has('about') ? 'slideInLeft 0.8s ease-out 0.4s both' : 'none',
                opacity: visibleSections.has('about') ? 1 : 0
              }}>
                Frontend Development | UI/UX Design | Mobile App Development | Quality Assurance
              </h3>
              <p style={{
                ...inlineStyles.aboutTextP,
                animation: visibleSections.has('about') ? 'slideInLeft 0.8s ease-out 0.6s both' : 'none',
                opacity: visibleSections.has('about') ? 1 : 0,
                fontSize: windowWidth <= 480 ? '0.95rem' : windowWidth <= 768 ? '1rem' : '1.1rem',
                maxWidth: '600px'
              }}>
                Aspiring and Hard-working IT student with hands-on experience in Frontend Development, Mobile App Development, UI/UX Design and Quality Testing. Currently pursuing academic training while building a strong foundation in front-end and backend technologies and user-centered design. Adept at collaborating in team environments and eager to sharpen technical skills while learning.              </p>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick('contact', e)}
                style={{
                  display: 'inline-block',
                  padding: '14px 32px',
                  background: '#0f172a',
                  color: '#fff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: windowWidth <= 480 ? '0.9rem' : '1rem',
                  marginTop: '20px',
                  transition: 'all 0.3s ease',
                  animation: visibleSections.has('about') ? 'slideInLeft 0.8s ease-out 0.8s both' : 'none',
                  opacity: visibleSections.has('about') ? 1 : 0,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  alignSelf: windowWidth <= 768 ? 'center' : 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                }}
              >
                Contact Me
              </a>
            </div>
            <div style={{
              ...inlineStyles.aboutImageContainer,
              order: windowWidth <= 768 ? -1 : 0
            }}>
              <img 
                src={profilePic} 
                alt="Chrizza Arnie Gales" 
                style={{
                  ...inlineStyles.profilePic,
                  width: windowWidth <= 480 ? '200px' : windowWidth <= 768 ? '250px' : windowWidth <= 1024 ? '280px' : '350px',
                  height: windowWidth <= 480 ? '200px' : windowWidth <= 768 ? '250px' : windowWidth <= 1024 ? '280px' : '350px',
                  animation: visibleSections.has('about') ? 'scaleIn 0.8s ease-out 0.4s both' : 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
            </div>
          </div>
        </section>

        {/* Educational Background */}
        <section id="educational-background" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: visibleSections.has('educational-background') ? 'none' : 'translateY(30px)',
          opacity: visibleSections.has('educational-background') ? 1 : 0
        }}>
          <h1 style={{ 
            margin: '0 0 48px',
            fontSize: windowWidth <= 480 ? '1.8rem' : windowWidth <= 768 ? '2.2rem' : '2.8rem',
            color: '#0f172a',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            lineHeight: 1.2
          }}>
            Educational Background
          </h1>
          <div 
            className="education-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: windowWidth <= 768 ? '1fr' : windowWidth <= 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: windowWidth <= 768 ? '16px' : '24px',
              maxWidth: '1200px',
              width: '100%',
              margin: '0 auto',
              justifyContent: 'center',
              alignItems: 'stretch'
            }}
          >
            {[
              { logo: cituLogo, alt: "Cebu Institute of Technology logo", name: "Cebu Institute of Technology - University", degree: "Bachelor of Science in Information Technology", period: "August 2022 - Present" },
              { logo: cjcLogo, alt: "Cor Jesu College logo", name: "Cor Jesu College", degree: "Bachelor of Science in Computer Science", period: "August 2021 - May 2022" },
              { logo: smspLogo, alt: "Saint Michael's School of Padada logo", name: "Saint Michael's School of Padada", degree: "Senior High School", period: "June 2017 - March 2019" },
              { logo: smspLogo, alt: "Saint Michael's School of Padada logo", name: "Saint Michael's School of Padada", degree: "Junior High School", period: "June 2013 - March 2017" },
              { logo: pcesLogo, alt: "Padada Central Elementary School logo", name: "Padada Central Elementary School", degree: "Elementary", period: "June 2007 - March 2013" }
            ].map((school, idx) => (
              <div 
                key={idx}
                style={{
                  ...inlineStyles.schoolEntry,
                  animation: visibleSections.has('educational-background') ? `scaleIn 0.6s ease-out ${idx * 0.1}s both` : 'none',
                  transform: hoveredSchool === idx ? 'translateY(-12px) scale(1.03)' : 'none',
                  boxShadow: hoveredSchool === idx 
                    ? '0 20px 60px rgba(125, 211, 192,0.3)' 
                    : '0 8px 32px rgba(0,0,0,0.1)',
                  borderColor: hoveredSchool === idx ? 'rgba(125, 211, 192,0.4)' : 'rgba(125, 211, 192,0.15)'
                }}
                onMouseEnter={() => setHoveredSchool(idx)}
                onMouseLeave={() => setHoveredSchool(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: hoveredSchool === idx 
                    ? 'linear-gradient(90deg, #7dd3c0, #a8e6cf, #ffc0cb, #ffb3ba)' 
                    : 'linear-gradient(90deg, transparent, transparent)',
                  transition: 'all 0.4s ease'
                }} />
                <img 
                  src={school.logo} 
                  alt={school.alt} 
                  style={{
                    ...inlineStyles.schoolLogo,
                    transform: hoveredSchool === idx ? 'scale(1.15) rotate(5deg)' : 'scale(1)',
                    background: hoveredSchool === idx 
                      ? 'linear-gradient(135deg, rgba(125, 211, 192,0.2), rgba(168, 230, 207,0.1))' 
                      : 'linear-gradient(135deg, rgba(125, 211, 192,0.1), rgba(168, 230, 207,0.05))',
                    boxShadow: hoveredSchool === idx 
                      ? '0 8px 24px rgba(125, 211, 192,0.3)' 
                      : '0 4px 16px rgba(125, 211, 192,0.15)'
                  }}
                />
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <h3 style={inlineStyles.schoolTextH3}>{school.name}</h3>
                  <h4 style={inlineStyles.schoolTextH4}>{school.degree}</h4>
                  <h5 style={inlineStyles.schoolTextH5}>{school.period}</h5>
            </div>
          </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: visibleSections.has('skills') ? 'none' : 'translateY(30px)',
          opacity: visibleSections.has('skills') ? 1 : 0
        }}>
          <h2 style={{ 
            marginBottom: '40px',
            fontSize: windowWidth <= 480 ? '1.8rem' : windowWidth <= 768 ? '2.2rem' : '2.8rem',
            color: '#0f172a',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            lineHeight: 1.2
          }}>
            My Skills
          </h2>
          <div 
            className="skills-grid"
            style={{
              ...inlineStyles.skillsGrid,
              gridTemplateColumns: windowWidth <= 480 ? 'repeat(2, 1fr)' : windowWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: windowWidth <= 480 ? '16px' : windowWidth <= 768 ? '20px' : '24px',
              padding: windowWidth <= 768 ? '0 20px' : '0'
            }}
          >
            {skills.map((skill, idx) => (
              <div
                key={skill.name}
                className="skill-hover-effect"
                style={{
                  ...inlineStyles.skillsItem,
                  animation: visibleSections.has('skills') ? `scaleIn 0.5s ease-out ${idx * 0.1}s both` : 'none',
                  transform: hoveredSkill === skill.name ? 'translateY(-8px) scale(1.05)' : 'none',
                  border: hoveredSkill === skill.name ? '2px solid rgba(125, 211, 192,0.4)' : '2px solid transparent',
                  boxShadow: hoveredSkill === skill.name ? '0 16px 40px rgba(125, 211, 192,0.25)' : inlineStyles.skillsItem.boxShadow,
                  background: hoveredSkill === skill.name 
                    ? 'linear-gradient(135deg, rgba(125, 211, 192,0.1), rgba(168, 230, 207,0.05))'
                    : inlineStyles.skillsItem.background
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <img 
                  src={skill.image} 
                  alt={skill.name}
                  style={inlineStyles.skillImage}
                />
                <div
                  style={{
                    ...inlineStyles.skillLabel,
                    visibility: ['Mobile App Development', 'Frontend Development', 'Quality Assurance', 'Web Design'].includes(skill.name)
                      ? 'visible'
                      : 'hidden'
                  }}
                >
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: visibleSections.has('projects') ? 'none' : 'translateY(30px)',
          opacity: visibleSections.has('projects') ? 1 : 0
        }}>
          <h2 style={{ 
            marginBottom: '40px',
            fontSize: windowWidth <= 480 ? '1.8rem' : windowWidth <= 768 ? '2.2rem' : '2.8rem',
            color: '#0f172a',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            lineHeight: 1.2
          }}>
            My Projects
          </h2>
          <div 
            className="projects-grid"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: windowWidth <= 768 ? '1fr' : windowWidth <= 1024 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(300px,1fr))', 
              gap: windowWidth <= 768 ? '20px' : 24,
              maxWidth: '1200px',
              width: '100%',
              margin: '0 auto',
              justifyContent: 'center'
            }}
          >
            {projects.map((p, idx) => {
              const hovered = hoveredProject === p.id;
              return (
                <div 
                  key={p.id} 
                  role="button" 
                  tabIndex={0} 
                  onFocus={() => setHoveredProject(p.id)} 
                  onBlur={() => setHoveredProject(null)} 
                  onMouseEnter={() => setHoveredProject(p.id)} 
                  onMouseLeave={() => setHoveredProject(null)} 
                  style={{
                    background: glassCardBackground,
                    padding: '28px', 
                    borderRadius: 20, 
                    boxShadow: hovered 
                      ? '0 20px 60px rgba(125, 211, 192,0.25)' 
                      : '0 8px 30px rgba(0,0,0,0.08)',
                    transform: hovered ? 'translateY(-12px) scale(1.02)' : 'none', 
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
                    cursor: 'pointer',
                    border: hovered ? '2px solid rgba(125, 211, 192,0.3)' : '2px solid transparent',
                    animation: visibleSections.has('projects') ? `scaleIn 0.6s ease-out ${idx * 0.15}s both` : 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: hovered 
                      ? 'linear-gradient(90deg, #7dd3c0, #a8e6cf, #ffc0cb, #ffb3ba)' 
                      : 'linear-gradient(90deg, transparent, transparent)',
                    transition: 'all 0.4s ease'
                  }} />
                  {p.image && (
                    <div style={{
                      width: '100%',
                      height: '200px',
                      marginBottom: '20px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      background: '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.12)' : '0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'all 0.4s ease'
                    }}>
                      <img 
                        src={p.image} 
                        alt={p.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transform: hovered ? 'scale(1.05)' : 'scale(1)',
                          transition: 'transform 0.4s ease'
                        }}
                      />
                  </div>
                  )}
                  <h3 style={{ 
                    marginTop: 0, 
                    fontSize: '1.5rem',
                    color: '#0f172a',
                    fontWeight: 700,
                    marginBottom: '12px'
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ 
                    color: '#475569', 
                    lineHeight: 1.7,
                    marginBottom: '16px',
                    fontSize: '1rem'
                  }}>
                    {p.desc}
                  </p>
                  <p style={{ 
                    fontSize: 14, 
                    color: '#64748b',
                    marginBottom: '20px',
                    fontStyle: 'italic'
                  }}>
                    <strong style={{ color: '#7dd3c0' }}>Tech Stack:</strong> {p.tech}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications&awards" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: visibleSections.has('certifications&awards') ? 'none' : 'translateY(30px)',
          opacity: visibleSections.has('certifications&awards') ? 1 : 0
        }}>
          <h2 style={{ 
            marginBottom: '40px',
            fontSize: windowWidth <= 480 ? '1.8rem' : windowWidth <= 768 ? '2.2rem' : '2.8rem',
            color: '#0f172a',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            lineHeight: 1.2
          }}>
            Certifications & Achievements
          </h2>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: windowWidth <= 768 ? '20px' : 24, 
            justifyContent: 'center',
            alignItems: 'stretch',
            maxWidth: '1000px',
            width: '100%',
            margin: '0 auto'
          }}>
            <div style={{ 
              width: '100%',
              background: glassCardBackground,
              padding: windowWidth <= 768 ? '24px' : '32px',
              borderRadius: 20,
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              border: '2px solid rgba(125, 211, 192,0.1)',
              animation: visibleSections.has('certifications&awards') ? 'slideInLeft 0.6s ease-out both' : 'none',
              minHeight: 260,
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                color: '#0f172a',
                marginTop: 0,
                marginBottom: '20px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '2rem' }}>🏆</span> Certificates
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['AWS Cloud Foundations', 'AWS Cloud Architecture', 'CodeChum Java Programming'].map((cert, idx) => (
                  <li key={idx} style={{
                    padding: '12px 16px',
                    margin: '8px 0',
                    background: 'rgba(125, 211, 192,0.05)',
                    borderRadius: 12,
                    borderLeft: '4px solid #7dd3c0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(125, 211, 192,0.1)';
                    e.target.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(125, 211, 192,0.05)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                  >
                    ✨ {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ 
              width: '100%',
              background: glassCardBackground,
              padding: windowWidth <= 768 ? '24px' : '32px',
              borderRadius: 20,
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              border: '2px solid rgba(125, 211, 192,0.1)',
              animation: visibleSections.has('certifications&awards') ? 'slideInRight 0.6s ease-out both' : 'none',
              minHeight: 260,
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                color: '#0f172a',
                marginTop: 0,
                marginBottom: '20px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '2rem' }}>⭐</span> Achievements
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['PitchPerfect 2025 x TechCon 2025 Finalist', '6th International Congress on eLearning 2025 Research Presenter'].map((ach, idx) => (
                  <li key={idx} style={{
                    padding: '12px 16px',
                    margin: '8px 0',
                    background: 'rgba(125, 211, 192,0.05)',
                    borderRadius: 12,
                    borderLeft: '4px solid #7dd3c0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(125, 211, 192,0.1)';
                    e.target.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(125, 211, 192,0.05)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                  >
                    ✨ {ach}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="content-section" style={{
          ...inlineStyles.contentSection,
          transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: visibleSections.has('contact') ? 'none' : 'translateY(30px)',
          opacity: visibleSections.has('contact') ? 1 : 0,
          textAlign: 'center'
        }}>
          <h2 style={{ 
            marginBottom: '20px',
            fontSize: windowWidth <= 480 ? '1.8rem' : windowWidth <= 768 ? '2.2rem' : '2.8rem',
            color: '#0f172a',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            lineHeight: 1.2
          }}>
            Contact Me
          </h2>
          <div style={{
            maxWidth: '600px',
            width: '100%',
            margin: '0 auto',
            background: glassCardBackground,
            padding: windowWidth <= 768 ? '30px 20px' : '40px',
            borderRadius: 24,
            boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
            border: '2px solid rgba(125, 211, 192,0.1)',
            animation: visibleSections.has('contact') ? 'scaleIn 0.6s ease-out both' : 'none',
            boxSizing: 'border-box'
          }}>
            <h4 style={{ 
            color: '#475569',
            fontSize: '1.2rem',
            marginBottom: '32px',
            fontWeight: 500
          }}>
            Let's connect and build something amazing together!
          </h4>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ 
                fontSize: '1.1rem',
                color: '#0f172a',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <img 
                  src={emailLogo} 
                  alt="Email" 
                  style={{ 
                    width: '24px', 
                    height: '24px', 
                    objectFit: 'contain' 
                  }} 
                />
                <strong style={{ color: '#7dd3c0' }}>chrizzaarniegales.official@gmail.com</strong>
                <button 
                  data-email-btn
                  onClick={copyEmail} 
                  style={{ 
                    marginLeft: 8, 
                    padding: '10px 20px', 
                    borderRadius: 12,
                    background: 'linear-gradient(135deg, #7dd3c0, #a8e6cf, #ffc0cb)',
                    color: '#000000',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(125, 211, 192,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 6px 16px rgba(125, 211, 192,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 12px rgba(125, 211, 192,0.3)';
                  }}
                >
                  Copy Email
                </button>
              </p>
            </div>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '32px'
            }}>
              <a 
                href="https://linkedin.com/in/chrizza-arnie-gales-283a78380" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  background: glassCardBackground,
                  color: '#0f172a',
                  borderRadius: 12,
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: '2px solid rgba(125, 211, 192, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px) scale(1.05)';
                  e.target.style.boxShadow = '0 8px 20px rgba(125, 211, 192, 0.3)';
                  e.target.style.borderColor = 'rgba(125, 211, 192, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  e.target.style.borderColor = 'rgba(125, 211, 192, 0.2)';
                }}
              >
                <img 
                  src={linkedinLogo} 
                  alt="LinkedIn" 
                  style={{ 
                    width: '24px', 
                    height: '24px', 
                    objectFit: 'contain' 
                  }} 
                />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Chizzwiz" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  background: glassCardBackground,
                  color: '#0f172a',
                  borderRadius: 12,
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: '2px solid rgba(125, 211, 192, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px) scale(1.05)';
                  e.target.style.boxShadow = '0 8px 20px rgba(125, 211, 192, 0.3)';
                  e.target.style.borderColor = 'rgba(125, 211, 192, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  e.target.style.borderColor = 'rgba(125, 211, 192, 0.2)';
                }}
              >
                <img 
                  src={githubLogo} 
                  alt="GitHub" 
                  style={{ 
                    width: '24px', 
                    height: '24px', 
                    objectFit: 'contain' 
                  }} 
                />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;