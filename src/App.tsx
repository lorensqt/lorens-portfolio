import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo">JLC</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content">
          <h1>Creative & Professional Web Solutions</h1>
          <p>Building dynamic, responsive, and beautiful web applications.</p>
          <a href="#contact" className="cta-button">Contact Me</a>
        </div>
      </header>

      <main className="content-sections">
        <section id="services">
          <h2>Services</h2>
          <p>Details about the services you offer.</p>
        </section>
        <section id="portfolio">
          <h2>My Work</h2>
          <p>A gallery or list of your projects.</p>
        </section>
        <section id="testimonials">
          <h2>Testimonials</h2>
          <p>What your clients say about you.</p>
        </section>
      </main>

      <aside className="bio-section">
        <img src="/nobgprofile.png" className="bio-image" alt="John Laurence Castillo" />
        <div className="bio-content">
          <h3>Laurence Castillo</h3>
          <h4>Freelance Design & Development Expert</h4>
          <p>
            I create user-focused web and mobile solutions that help businesses grow.
          </p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" aria-label="Dribbble">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.947 19.24c-2.59-1.332-4.284-3.93-4.68-6.932l11.239 11.239c-2.301.772-4.835.501-6.559-4.307zm8.46-2.073l-11.239-11.239c2.59 1.332 4.284 3.93 4.68 6.932-1.095-.41-2.287-.632-3.513-.632-3.132 0-5.859 1.7-7.168 4.137 3.433 2.738 8.339 2.948 12.563-1.221-1.125.92-2.412 1.529-3.81 1.529-1.002 0-1.932-.319-2.713-.868.781.549 1.711.868 2.713.868 2.206 0 4.112-1.199 5.127-3.004.41.905.632 1.897.632 2.927 0 1.226-.319 2.388-.868 3.433zm1.487-7.167c0-3.132-1.7-5.859-4.137-7.168 2.738 3.433 2.948 8.339-1.221 12.563.92-1.125 1.529-2.412 1.529-3.81 0-1.002-.319-1.932-.868-2.713.549.781.868 1.711.868 2.713 0 2.206-1.199 4.112-3.004 5.127.905.41 1.897.632 2.927.632 1.226 0 2.388-.319 3.433-.868-2.073-5.327-1.221-10.563 1.221-13.433z"/></svg>
            </a>
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
