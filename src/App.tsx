import { useState, useEffect } from 'react';
import { FcShop, FcMoneyTransfer, FcPuzzle, FcGlobe, FcCalendar, FcBriefcase, FcLike, FcCommandLine, FcApproval, FcSettings, FcCollaboration, FcFlashOn, FcCellPhone } from "react-icons/fc";
import { FaFacebookF, FaFacebookMessenger, FaDownload, FaPhone } from "react-icons/fa";
import { SiGmail, SiCisco, SiNginx, SiLinux } from "react-icons/si";
import Notification from './components/Notification';
import './App.css';

function App() {
  const [theme] = useState('light');
  const [isBioVisible, setIsBioVisible] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'confirm';
    link?: string;
    onConfirm?: () => void;
  } | null>(null);

  const toggleBio = () => {
    setIsBioVisible(!isBioVisible);
  };

  const closeNotification = () => {
    setNotification(null);
  };

  const handleSocialClick = (link: string) => {
    navigator.clipboard.writeText(link);
    setNotification({
      type: 'confirm',
      message: 'Link copied to clipboard! Would you like to open it?',
      link: link,
      onConfirm: () => window.open(link, '_blank')
    });
  };

  const handlePhoneClick = (phoneNumber: string) => {
    navigator.clipboard.writeText(phoneNumber);
    setNotification({
      type: 'success',
      message: 'Phone number copied to clipboard!'
    });
  };

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setNotification({
      type: 'success',
      message: 'Email address copied to clipboard!'
    });
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Trigger bio entrance after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBioVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          link={notification.link}
          onConfirm={notification.onConfirm}
          onClose={closeNotification}
        />
      )}

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
            <div className="card-main values-card" id="values">
              <div className="values-header-section">
                <div className="values-icon-wrapper">
                  <FcApproval className="values-main-icon" />
                </div>
                <h3>Core Values</h3>
              </div>
              <div className="values-grid">
                <div className="value-item">
                  <FcFlashOn size={35} />
                  <div className="value-text">
                    <h4>High Performance</h4>
                    <p>Optimized for speed and efficiency.</p>
                  </div>
                </div>
                <div className="value-item">
                  <FcCellPhone size={35} />
                  <div className="value-text">
                    <h4>Responsive</h4>
                    <p>Perfect on mobile, tablet, and desktop.</p>
                  </div>
                </div>
                <div className="value-item">
                  <FcSettings size={35} />
                  <div className="value-text">
                    <h4>Scalable Code</h4>
                    <p>Clean architecture ready for growth.</p>
                  </div>
                </div>
                <div className="value-item">
                  <FcCollaboration size={35} />
                  <div className="value-text">
                    <h4>User-Centric</h4>
                    <p>Designed with the end-user in mind.</p>
                  </div>
                </div>
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
                <div className="tech-item">
                  <SiLinux size={45} color="#FCC624" />
                  <span>Linux</span>
                </div>
                <div className="tech-item">
                  <SiNginx size={45} color="#009639" />
                  <span>Nginx</span>
                </div>
                <div className="tech-item">
                  <SiCisco size={45} color="#1BA0D7" />
                  <span>Cisco</span>
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
              <div className="profile-header">
                <h2>John Laurence Castillo</h2>
                <span className="profile-tagline">Full Stack Developer</span>
                <div className="status-indicator-wrapper">
                   <span className="status-dot pulse"></span>
                   <span className="status-text">Freelance Only</span>
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-value">2+</span>
                  <span className="stat-label">Years Exp.</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>

              <div className="social-links">
                <a href="#" onClick={(e) => { e.preventDefault(); handleSocialClick('https://www.facebook.com/omorfos69'); }} aria-label="Facebook" className="social-btn facebook"><FaFacebookF /></a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSocialClick('https://m.me/omorfos69'); }} aria-label="Messenger" className="social-btn messenger"><FaFacebookMessenger /></a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleEmailClick('castillojohnlaurence0@gmail.com'); }} aria-label="Gmail" className="social-btn gmail"><SiGmail /></a>
                <a href="#" onClick={(e) => { e.preventDefault(); handlePhoneClick('09942617194'); }} aria-label="Phone" className="social-btn phone"><FaPhone /></a>
              </div>

              <a href="/lorens_resume.pdf" download="lorens_resume.pdf" className="download-cv-btn">
                <FaDownload />
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
          <h4>Hi, I'm LORENS</h4>
          <p>I craft compelling web and mobile experiences. Let's build something amazing together.</p>
        </div>
      </aside>

      <footer id="contact" className="footer-glass">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>LORENS</h4>
            <p>© 2025 John Laurence Castillo</p>
            <p className="footer-tagline">Building digital experiences.</p>
            <p className="footer-react-note">This page is made with React</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
