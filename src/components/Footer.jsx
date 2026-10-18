// Footer.jsx  (npm i react-icons)
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaGithub } from 'react-icons/fa6';
import { FiMail, FiMapPin } from 'react-icons/fi';
import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">Davide Ciaramidaro</a>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram"><FaGithub /></a>
            </div>
          </div>

          <nav className="footer-col" aria-label="Navigazione">
            <h3>Navigazione</h3>
            <ul>
              <li><a href="#servizi">Servizi</a></li>
              <li><a href="#works">Portfolio</a></li>
              <li><a href="#howwork">Come Lavoro</a></li>
              <li><a href="#price">Pacchetti</a></li>
            </ul>
          </nav>

          <div className="footer-col">
            <h3>Contatti</h3>
            <p className="footer-contact">
              <FiMail />
              <a href="mailto:davideciaramidaro@gmail.com">davideciaramidaro@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
