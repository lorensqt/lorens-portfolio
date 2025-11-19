import { useState, useEffect } from 'react';
import { FcShop, FcMoneyTransfer, FcPuzzle, FcGlobe, FcCalendar, FcBusinessman, FcBriefcase, FcLike, FcCommandLine, FcApproval, FcSettings, FcCollaboration, FcDownload, FcOk } from "react-icons/fc";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [isBioVisible, setIsBioVisible] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleBio = () => {
    setIsBioVisible(!isBioVisible);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo">JLC</div>
        <ul className="nav-links">
          <li><a href="#home"><span>Home</span></a></li>
          <li><a href="#main-content"><span>About</span></a></li>
          <li><a href="#main-content"><span>Projects</span></a></li>
          <li><a href="#contact"><span>Contact</span></a></li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Creative & Professional Web Solutions</h1>
          <p className="hero-subtitle">Building dynamic, responsive, and beautiful web applications.</p>
          <a href="#contact" className="cta-button hero-button">LETS WORK TOGETHER</a>
        </div>
      </header>

      <main id="main-content" className="main-grid-container">
        <div className="left-column">
          <div className="card-grid-main">
            <div className="card-main about-card" id="about">
              <div className="about-header-section">
                <div className="about-icon-wrapper">
                  <FcBusinessman className="about-main-icon" />
                </div>
                <div className="about-title-wrapper">
                  <h3>About Me</h3>
                  <span className="about-role">Full Stack Developer</span>
                </div>
              </div>
              <div className="about-body">
                <p className="about-intro">
                  Hi, I'm <span className="name-highlight">LORENS</span>.
                </p>
                <p className="about-description">
                  I build dynamic web applications with a focus on quality and performance.
                </p>
                <div className="about-skills-container">
                  <span className="skill-pill pill-laravel">Laravel</span>
                  <span className="skill-pill pill-react">React</span>
                  <span className="skill-pill pill-vue">Vue</span>
                  <span className="skill-pill pill-pest">Pest</span>
                </div>
                <p className="about-philosophy">
                  Ensuring every solution is elegant, efficient, and robust.
                </p>
              </div>
            </div>
            <div className="card-main services-card" id="services">
              <div className="services-header-section">
                <div className="services-icon-wrapper">
                   <FcBriefcase className="services-main-icon" />
                </div>
                <h3>What I Offer</h3>
              </div>
              <div className="services-modern-grid">
                <div className="service-modern-item">
                  <div className="icon-box"><FcShop size={40} /></div>
                  <span>E-commerce</span>
                </div>
                <div className="service-modern-item">
                  <div className="icon-box"><FcMoneyTransfer size={40} /></div>
                  <span>Sinking Fund</span>
                </div>
                <div className="service-modern-item">
                  <div className="icon-box"><FcPuzzle size={40} /></div>
                  <span>Automations</span>
                </div>
                <div className="service-modern-item">
                  <div className="icon-box"><FcGlobe size={40} /></div>
                  <span>Public Websites</span>
                </div>
                <div className="service-modern-item">
                  <div className="icon-box"><FcCalendar size={40} /></div>
                  <span>Reservations</span>
                </div>
                <div className="service-modern-item">
                  <div className="icon-box"><FcLike size={40} /></div>
                  <span>Wedding Websites</span>
                </div>
              </div>
            </div>
            <div className="card-main tech-stack-card full-width" id="tech-stack">
              <div className="tech-header-section">
                <div className="tech-icon-wrapper">
                  <FcCommandLine className="tech-main-icon" />
                </div>
                <h3>Tech Stack</h3>
              </div>
              <div className="tech-grid">
                <div className="tech-item">
                  <i className="devicon-laravel-original colored"></i>
                  <span>Laravel</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-react-original colored"></i>
                  <span>React</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-vuejs-plain colored"></i>
                  <span>Vue</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-typescript-plain colored"></i>
                  <span>TypeScript</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-tailwindcss-original colored"></i>
                  <span>Tailwind</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-nodejs-plain colored"></i>
                  <span>Node.js</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-mysql-plain colored"></i>
                  <span>MySQL</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-git-plain colored"></i>
                  <span>Git</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-docker-plain colored"></i>
                  <span>Docker</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-vitejs-plain colored"></i>
                  <span>Vite</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-googlecloud-plain colored"></i>
                  <span>GCP</span>
                </div>
              </div>
            </div>
            <div className="card-main projects-card full-width" id="projects">
              <div className="projects-header-section">
                <div className="projects-icon-wrapper">
                  <FcBriefcase className="projects-main-icon" />
                </div>
                <h3>Projects</h3>
              </div>
              <div className="projects-grid">
                <div className="project-item">
                  <FcApproval size={40} />
                  <h4>E-commerce Platform</h4>
                  <p>Developed a full-stack e-commerce solution with secure payment gateway integration and inventory management.</p>
                  <a href="#" className="project-link">View Project</a>
                </div>
                <div className="project-item">
                  <FcSettings size={40} />
                  <h4>CRM System</h4>
                  <p>Built a custom Customer Relationship Management system to streamline client interactions and sales processes.</p>
                  <a href="#" className="project-link">View Project</a>
                </div>
                <div className="project-item">
                  <FcCollaboration size={40} />
                  <h4>Real-time Chat Application</h4>
                  <p>Created a real-time chat application using WebSockets, supporting direct messages and group chats.</p>
                  <a href="#" className="project-link">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="profile-sticky-wrapper">
            <div className="profile-card-glass">
              <div className="profile-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="John Laurence Castillo" 
                  className="profile-avatar"
                />
              </div>
              
              <div className="profile-info">
                <h2>John Laurence Castillo</h2>
                <span className="profile-tagline">Full Stack Developer</span>
                <div className="status-indicator-wrapper">
                   <span className="status-dot pulse"></span>
                   <span className="status-text">Freelance Only</span>
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-value">5+</span>
                  <span className="stat-label">Years Exp.</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value">30+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>

              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-btn facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Messenger" className="social-btn messenger"><FaFacebookMessenger /></a>
                <a href="#" aria-label="Gmail" className="social-btn gmail"><SiGmail /></a>
              </div>

              <a href="/lorens_resume.pdf" download="lorens_resume.pdf" className="download-cv-btn">
                <FcDownload size={20} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <button className="bio-toggle" onClick={toggleBio} aria-label="Toggle Bio">
        <i className={`fas ${isBioVisible ? 'fa-times' : 'fa-user'}`}></i>
        <span className="tooltip-text">{isBioVisible ? 'Hide Bio' : 'Show Bio'}</span>
      </button>

      <aside className={`bio-section ${isBioVisible ? 'visible' : ''}`}>
        <img src="/nobgprofile.png" className="bio-image" alt="John Laurence Castillo" />
        <div className="bio-content">
          <h3>Laurence Castillo</h3>
          <h4>Freelance Design & Development Expert</h4>
          <p>I create user-focused web and mobile solutions that help businesses grow.</p>
        </div>
      </aside>

      <footer id="contact" className="footer-glass">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>LORENS</h4>
            <p>© 2025 John Laurence Castillo</p>
            <p className="footer-tagline">Building digital experiences.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
