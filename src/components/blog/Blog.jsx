/* eslint-disable no-unused-vars */
import "./blog.css";
import Blog1 from "../../assets/blog1.png";


import shapeOne from "../../assets/shape-1.png";
import { FaArrowRight } from "react-icons/fa";

function Blog() {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title text-cs"> Blog</h2>
      <p className="section__subtitle">
        My <span>Articles </span>
      </p>

      <div className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">February 20, 2024</span>
          <h3 className="blog__title">Navigating UI UX</h3>
          <p className="blog__description">
          In the world of design, user interface (UI) and user experience (UX) are two closely
           connected but different ideas, especially when it comes to software and digital products....
          </p>
          <a href="https://stingless.github.io/ui/ux/design/2024/02/20/uiux/" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={Blog1} alt="" className="blog__img" />
        </div>
        </div>

        

        
          

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Blog</span>
      </div>
    </section>
  );
}

export default Blog;
