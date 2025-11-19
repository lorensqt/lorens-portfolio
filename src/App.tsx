import { useState, useEffect } from 'react';
import { FcShop, FcMoneyTransfer, FcPuzzle, FcGlobe, FcCalendar, FcBusinessman, FcBriefcase } from "react-icons/fc";
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
            <div className="card-main" id="about">
              <div className="card-header">
                <FcBusinessman className="card-icon" />
                <h3>About Me</h3>
              </div>
              <p>
                Hello! I'm <span className="highlight-text">John Laurence Castillo</span>. 
                I am a passionate developer specializing in building dynamic web applications using <span className="highlight-text">Laravel</span>, <span className="highlight-text">React</span>, and <span className="highlight-text">Vue</span>. 
                With a strong focus on testing using <span className="highlight-text">Pest</span>, I ensure every solution is elegant, efficient, and robust.
              </p>
            </div>
            <div className="card-main" id="services">
              <div className="card-header services-header">
                <FcBriefcase className="card-icon" />
                <h3>Services</h3>
              </div>
              <div className="services-grid">
                <div className="service-item">
                  <FcShop size={30} />
                  <span>E-commerce</span>
                </div>
                <div className="service-item">
                  <FcMoneyTransfer size={30} />
                  <span>Sinking Fund</span>
                </div>
                <div className="service-item">
                  <FcPuzzle size={30} />
                  <span>Automations & Integrations</span>
                </div>
                <div className="service-item">
                  <FcGlobe size={30} />
                  <span>Public Websites</span>
                </div>
                <div className="service-item">
                  <FcCalendar size={30} />
                  <span>Reservations</span>
                </div>
              </div>
            </div>
            <div className="card-main full-width" id="tech-stack">
              <h3>Tech Stack</h3>
              <ul>
                <li><i className="devicon-react-original colored"></i> React</li>
                <li><i className="devicon-vuejs-plain colored"></i> Vue</li>
                <li><i className="devicon-typescript-plain colored"></i> TypeScript</li>
                <li><i className="devicon-tailwindcss-original colored"></i> Tailwind CSS</li>
                <li><i className="devicon-nodejs-plain colored"></i> Node.js</li>
                <li><i className="devicon-laravel-original colored"></i> Laravel</li>
                <li><i className="devicon-mysql-plain colored"></i> MySQL</li>
                <li><i className="devicon-git-plain colored"></i> Git & GitHub</li>
                <li><i className="devicon-docker-plain colored"></i> Docker</li>
                <li><i className="devicon-vitejs-plain colored"></i> Vite</li>
                <li><i className="devicon-googlecloud-plain colored"></i> Google Cloud Platform</li>
              </ul>
            </div>
            <div className="card-main full-width" id="projects">
              <h3>Projects</h3>
              <p>Showcasing a variety of projects from e-commerce platforms to data visualization dashboards.</p>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="white-space-content">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Professional Freelancer" 
              className="professional-portrait"
            />
            <div className="initials-logo">
              <span>L</span>
              <span>O</span>
              <span>R</span>
              <span>E</span>
              <span>N</span>
              <span>S</span>
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
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Messenger"><i className="fab fa-facebook-messenger"></i></a>
            <a href="#" aria-label="Gmail"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </aside>

      <footer id="contact" className="footer">
        <p>© 2025 John Laurence Castillo. All Rights Reserved.</p>
        <p>Contact me at: [your-email@example.com]</p>
      </footer>
    </div>
  );
}

export default App;
