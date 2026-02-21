import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const SkillBar = ({ label, percentage }) => (
  <div className="skill-item">
    <div className="skill-info"><span>{label}</span><span>{percentage}</span></div>
    <div className="skill-bar-bg">
      <motion.div className="skill-bar-fill" initial={{ width: 0 }} whileInView={{ width: percentage }} transition={{ duration: 1 }} />
    </div>
  </div>
);

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <header className="hero">
      <h1 className="text-8xl ...">Pritam Chakraborty</h1>
      <Link to="/works" className="btn">View My works</Link>
    </header>

    <section className="section">
      <div className="container flex-section">
        <h2 className="section-title">About Me</h2>
        <p style={{ flex: 1, color: '#a1a1a6', fontSize: '1.2rem' }}>
          I am a creative developer focused on building functional and beautiful digital experiences.
        </p>
      </div>
    </section>

    <section className="section" style={{ background: '#0d0d0e' }}>
      <div className="container flex-section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-wrapper">
          <div className="skill-card">
            <h3>Frontend</h3>
            <SkillBar label="HTML" percentage="80%" />
            <SkillBar label="CSS" percentage="75%" />
            <SkillBar label="JavaScript" percentage="70%" />
            <SkillBar label="React" percentage="60%" />
          </div>
          <div className="skill-card">
            <h3>Design</h3>
            <SkillBar label="UI/UX" percentage="70%" />
            <SkillBar label="Figma" percentage="65%" />
            <SkillBar label="Adobe Suite" percentage="50%" />
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const Contact = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="section" style={{ paddingTop: '200px' }}>
    <div className="container" style={{ flexDirection: 'column' }}>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Get In Touch</h2>
      <div className="contact-grid">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-item"><i className="fab fa-github"></i><span>GitHub</span></a>
        <a href="mailto:email@example.com" className="contact-item"><i className="fas fa-envelope"></i><span>Email</span></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-item"><i className="fab fa-linkedin-in"></i><span>LinkedIn</span></a>
        {/* Updated icon to classic twitter for better compatibility */}
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="contact-item"><i className="fab fa-twitter"></i><span>Twitter</span></a>
      </div>
      <Link to="/" className="btn" style={{ marginTop: '80px' }}>Back to Home</Link>
    </div>
  </motion.div>
);

// --- WORKS PAGE ---
const Works = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="section" style={{ paddingTop: '200px', minHeight: '100vh' }}>
    <div className="container" style={{ flexDirection: 'column', textAlign: 'center' }}>
      <h2 className="section-title" style={{ marginBottom: '60px' }}>Selected Works</h2>
      
      <div className="works-grid">
       <a href="https://gocartpritam-git-vercel-react-server-f491c9-pritamx66s-projects.vercel.app?_vercel_share=0SyJteE56uZKjEzHksrxqn4X68kMTPmJ" target="_blank" rel="noopener noreferrer" className="card project-card">
  <h3>goCart</h3> 
  <p>An e-commerce website</p>
  <span className="tag">View Live</span>
</a>

        <a href="#" className="card project-card">
          <h3>Project 2</h3>
          <p>Coming Soon</p>
          <span className="tag">Stay Tuned</span>
        </a>

        <a href="#" className="card project-card">
          <h3>Project 3</h3>
          <p>Coming Soon</p>
          <span className="tag">Stay Tuned</span>
        </a>
      </div>

      <Link to="/" className="btn" style={{ marginTop: '80px' }}>Back to Home</Link>
    </div>
  </motion.div>
);

function App() {
  const location = useLocation();
  return (
    <div className="portfolio-app">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">PRITAM</Link>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/works">WORKS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* FIXED: Now pointing to the Works component */}
          <Route path="/works" element={<Works />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;