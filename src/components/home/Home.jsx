/* eslint-disable no-unused-vars */
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import "./home.css";
import { FaLinkedin, FaGithub} from "react-icons/fa";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>ASHITHA</span> SHETTY
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>UI/UX Designer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
              Undergraduate 
              </span>
              <span className="text-sm texs-cs">
                
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">    Developer</span>
              
            </p>

            <img src={shapeOne} className="shape shape__1" />
            <img src={shapeTwo} className="shape shape__2" />
            <img src={shapeTwo} className="shape shape__3" />
          </div>

          <p className="home__text">
           This is me, I am from Karnataka. I am a keen Literary enthusisast, a public speaker
           and a designer. I have an eye for details.
          </p>

          <div className="home__socials">
            <a href="https://linkedin.com/in/ashitha-shetty-868728173" className="home__social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Ashitha-Shetty" className="home__social-link">
              <FaGithub />
            </a>
            
          </div>

          <div className="home__btns">
            <a href="https://drive.google.com/file/d/1tD-zKdzdOI_EosLgwQv8jIVgO6CvfN3q/view?usp=drive_link" className="btn text-cs">
              My CV
            </a>
            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">UI UX Designer</span>
      </div>
    </section>
  );
}

export default Home;
