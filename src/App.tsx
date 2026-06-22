import { useState, useEffect } from 'react';
import { FcShop, FcMoneyTransfer, FcPuzzle, FcGlobe, FcBriefcase, FcCommandLine, FcApproval, FcSettings, FcCollaboration, FcFlashOn, FcCellPhone, FcPrivacy, FcElectronics, FcDatabase, FcComboChart, FcCalculator, FcClock } from "react-icons/fc";
import { FaFacebookF, FaFacebookMessenger, FaDownload, FaPhone, FaUser, FaTimes } from "react-icons/fa";
import { SiGmail, SiCisco, SiNginx, SiLinux } from "react-icons/si";
import Notification from './components/Notification';
import './App.css';

function App() {
  const [theme] = useState('dark');
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
    window.location.href = `tel:${phoneNumber}`;
    setNotification({
      type: 'success',
      message: 'Phone number copied and call initiated!'
    });
  };

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setNotification({
      type: 'confirm',
      message: 'Email address copied! Go to Gmail?',
      link: 'https://gmail.com',
      onConfirm: () => window.open('https://gmail.com', '_blank')
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
          <h1 className="hero-title">Crafting Digital Landscapes</h1>
          <p className="hero-subtitle">Rooted in clean code. Growing beautiful user experiences.</p>
          <a href="#profile-card" className="cta-button hero-button">START A PROJECT</a>
        </div>
      </header>

      <main id="main-content" className="main-grid-container">
        <div className="left-column">
          <div className="card-grid-main">
            <div className="card-main combined-services-card full-width" id="services">
              <div className="combined-services-layout">
                {/* Standards Column */}
                <div className="standards-section">
                  <div className="values-header-section">
                    <div className="values-icon-wrapper">
                      <FcApproval className="values-main-icon" />
                    </div>
                    <h3>The Lorens Standard</h3>
                  </div>
                  <div className="values-grid">
                    <div className="value-item">
                      <FcFlashOn size={35} />
                      <div className="value-text">
                        <h4>Performance Obsessed</h4>
                        <p>Lightning-fast load times designed for better SEO and conversion.</p>
                      </div>
                    </div>
                    <div className="value-item">
                      <FcCellPhone size={35} />
                      <div className="value-text">
                        <h4>Mobile-First Design</h4>
                        <p>Flawless experiences across all devices, guaranteed.</p>
                      </div>
                    </div>
                    <div className="value-item">
                      <FcSettings size={35} />
                      <div className="value-text">
                        <h4>Clean Architecture</h4>
                        <p>Future-proof code foundations that scale effortlessly.</p>
                      </div>
                    </div>
                    <div className="value-item">
                      <FcCollaboration size={35} />
                      <div className="value-text">
                        <h4>Intuitive UX/UI</h4>
                        <p>Interfaces crafted to turn visitors into loyal users.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solutions Column */}
                <div className="solutions-section">
                  <div className="services-header-section">
                    <div className="services-icon-wrapper">
                       <FcBriefcase className="services-main-icon" />
                    </div>
                    <h3>Specialized Solutions</h3>
                  </div>
                  <div className="services-detailed-grid">
                    <div className="service-detailed-item">
                      <div className="service-icon-box"><FcShop size={30} /></div>
                      <div className="service-content">
                        <h4>E-Commerce Platforms</h4>
                        <p>Secure shops built to drive your digital sales.</p>
                      </div>
                    </div>
                    <div className="service-detailed-item">
                      <div className="service-icon-box"><FcDatabase size={30} /></div>
                      <div className="service-content">
                        <h4>Enterprise Solutions</h4>
                        <p>Custom tools to streamline your operations.</p>
                      </div>
                    </div>
                    <div className="service-detailed-item">
                      <div className="service-icon-box"><FcPuzzle size={30} /></div>
                      <div className="service-content">
                        <h4>Business Automation</h4>
                        <p>Smart workflows to save you time and overhead.</p>
                      </div>
                    </div>
                    <div className="service-detailed-item">
                      <div className="service-icon-box"><FcCellPhone size={30} /></div>
                      <div className="service-content">
                        <h4>Cross-Platform Apps</h4>
                        <p>Native-feel apps built with React Native.</p>
                      </div>
                    </div>
                    <div className="service-detailed-item">
                      <div className="service-icon-box"><FcGlobe size={30} /></div>
                      <div className="service-content">
                        <h4>High-Impact Web</h4>
                        <p>Stunning sites tailored to your unique story.</p>
                      </div>
                    </div>
                    <div className="service-detailed-item">
                      <div className="service-icon-box"><FcSettings size={30} /></div>
                      <div className="service-content">
                        <h4>Bespoke Software</h4>
                        <p>Tailored apps for specific business requirements.</p>
                      </div>
                    </div>
                  </div>
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
                  <i className="devicon-dotnetcore-plain colored"></i>
                  <span>.NET</span>
                </div>
                <div className="tech-item">
                  <i className="devicon-react-original colored"></i>
                  <span>React Native</span>
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

            {/* Certifications Section */}
            <div className="card-main certifications-card full-width" id="certifications">
              <div className="certifications-header-section">
                <div className="certifications-icon-wrapper">
                  <FcApproval className="certifications-main-icon" />
                </div>
                <h3>Certifications</h3>
              </div>
              <div className="cert-grid">
                <div className="cert-item">
                  <img src={`${import.meta.env.BASE_URL}itil4_logo.png`} alt="ITIL 4 Foundation Logo" className="cert-logo" />
                  <h4>ITIL® 4 Foundation</h4>
                  <a href="https://www.peoplecert.org/public-profile?ed=XCHu3ZqUTNJklg4ya17Nbvle9y7W6quw" className="cert-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
                <div className="cert-item">
                  <img src={`${import.meta.env.BASE_URL}project+_logo.png`} alt="CompTIA Project+ Logo" className="cert-logo" />
                  <h4>CompTIA Project+</h4>
                  <a href="https://www.credly.com/badges/27eab92d-8f53-402f-8d39-e3d7b2985353" className="cert-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
                <div className="cert-item">
                  <img src={`${import.meta.env.BASE_URL}network+_logo.png`} alt="CompTIA Network+ Logo" className="cert-logo" />
                  <h4>CompTIA Network+</h4>
                  <a href="https://www.credly.com/badges/b736f50b-6b49-4614-b1ce-2f79e6d46306/public_url" className="cert-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
                <div className="cert-item">
                  <img src={`${import.meta.env.BASE_URL}jse_logo.png`} alt="JSE-40-01 Logo" className="cert-logo" />
                  <h4>[JSE-40-01] JSE – Certified Entry-Level JavaScript Programmer</h4>
                  <a href="https://www.credly.com/badges/ab731f07-1553-4bbb-bb2b-4a9c713094fa/public_url" className="cert-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
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
                  <span className="project-badge">Internal</span>
                  <FcMoneyTransfer size={40} />
                  <h4>Sinking Fund Systems</h4>
                  <p>Comprehensive financial tools for managing and tracking sinking funds to ensure long-term stability.</p>
                </div>
                <div className="project-item">
                  <span className="project-badge">Internal</span>
                  <FcComboChart size={40} />
                  <h4>Project Monitoring</h4>
                  <p>Advanced tracking system for projects and progress with real-time insights and status reporting.</p>
                </div>
                <div className="project-item">
                  <span className="project-badge">Internal</span>
                  <FcElectronics size={40} />
                  <h4>Infra Healthchecker</h4>
                  <p>A custom .NET application deployed across servers to monitor and deliver server health data via API.</p>
                </div>
                <div className="project-item">
                  <span className="project-badge">Internal</span>
                  <FcPrivacy size={40} />
                  <h4>Secret Vaults System</h4>
                  <p>A secure platform for storing sensitive credentials and information with robust encryption protocols.</p>
                </div>
                <div className="project-item">
                  <span className="project-badge">Internal</span>
                  <FcDatabase size={40} />
                  <h4>Inventory Systems</h4>
                  <p>Efficient management systems for tracking stock levels, orders, and logistics for various businesses.</p>
                </div>
                <div className="project-item">
                  <span className="project-badge">Internal</span>
                  <FcGlobe size={40} />
                  <h4>Cloud Monitoring</h4>
                  <p>Real-time monitoring of cloud instances, providing details on health, performance, and cost optimization.</p>
                </div>
                <div className="project-item">
                  <span className="project-badge">Internal</span>
                  <FcClock size={40} />
                  <h4>MyDUTY</h4>
                  <p>An alert and incident response system with escalation policies, similar to PagerDuty.</p>
                </div>
                <div className="project-item">
                  <span className="project-badge">Internal</span>
                  <FcCalculator size={40} />
                  <h4>Salary & Expense Tracker</h4>
                  <p>A mobile application developed with React Native for personal finance management and expense tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="profile-sticky-wrapper">
            <div className="profile-card-glass" id="profile-card">
              <div className="profile-header">
                <h2>John Laurence Castillo</h2>
                <span className="profile-tagline">Software Engineer</span>
                <div className="status-indicator-wrapper">
                   <span className="status-dot pulse"></span>
                   <span className="status-text">Freelance Only</span>
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-value">3+</span>
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

              <a href={`${import.meta.env.BASE_URL}lorens_resume.pdf`} download="lorens_resume.pdf" className="download-cv-btn">
                <FaDownload />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <button className="bio-toggle" onClick={toggleBio} aria-label="Toggle Bio">
        {isBioVisible ? <FaTimes size={24} /> : <FaUser size={24} />}
        <span className="tooltip-text">{isBioVisible ? 'Hide Bio' : 'Show Bio'}</span>
      </button>

      <aside className={`bio-section ${isBioVisible ? 'visible' : ''}`}>
        <img src={`${import.meta.env.BASE_URL}nobgprofile.png`} className="bio-image" alt="John Laurence Castillo" />
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
            <p className="footer-tagline">Work smarter not harder.</p>
            <p className="footer-react-note">This page is made with React</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
