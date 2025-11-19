import { useState, useEffect } from 'react';
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
              <h3>About Me</h3>
              <p>A passionate developer with a knack for creating elegant and efficient solutions. I have 5+ years of experience in building and designing web applications.</p>
            </div>
            <div className="card-main" id="services">
              <h3>Services</h3>
              <ul>
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Backend Development</li>
              </ul>
            </div>
            <div className="card-main full-width" id="tech-stack">
              <h3>Tech Stack</h3>
              <ul>
                <li><i className="fab fa-react"></i> React</li>
                <li><i className="fab fa-vuejs"></i> Vue</li>
                <li><i className="fas fa-code"></i> TypeScript</li>
                <li><i className="fab fa-css3-alt"></i> Tailwind CSS</li>
                <li><i className="fab fa-node-js"></i> Node.js</li>
                <li><i className="fab fa-laravel"></i> Laravel</li>
                <li><i className="fas fa-database"></i> MySQL</li>
                <li><i className="fab fa-git-alt"></i> Git & GitHub</li>
                <li><i className="fab fa-docker"></i> Docker</li>
                <li><i className="fas fa-bolt-lightning"></i> Vite</li>
                <li><i className="fab fa-google"></i> Google Cloud Platform</li>
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
            <div className="initials-logo">LORENS</div>
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
