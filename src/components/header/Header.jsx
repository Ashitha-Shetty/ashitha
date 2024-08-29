/* eslint-disable no-unused-vars */
import "./header.css";
import { links } from "../../Data";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import shapeOne from "../../assets/shape-1.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    setScrollNav(window.scrollY >= 100);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
  };

  // Toggle sticky navbar
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Toggle scrollbar
  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav__logo text-cs">
          SHETTY
        </Link>

        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => (
                <li className="nav__item" key={index}>
                  <Link
                    className="nav__link text-cs"
                    to={path}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="header__socials">
              <a href="https://linkedin.com/in/ashitha-shetty-868728173" className="header__social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Ashitha-Shetty" className="header__social-link">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="section__deco deco__left header__deco">
            <img src={shapeOne} alt="Decorative Shape" className="shape" />
          </div>
        </div>

        <div className="nav__btns">
          <div className="theme__toggler" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsSun /> : <BsMoon />}
          </div>
          <div
            className={`${
              showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
