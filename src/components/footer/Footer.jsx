import "./footer.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
             
          <a href="https://linkedin.com/in/ashitha-shetty-868728173" className="footer__social-link">
            <FaLinkedin/>
          </a>
          <a href="https://github.com/Ashitha-Shetty" className="footer__social-link">
            <FaGithub />
          </a>
          
        </div>

        

        <p className="footer__copyright text-cs">
          Developed by <span>Ashitha</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
