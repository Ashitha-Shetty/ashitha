/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";
import Portfolio from "./Portfolio";

function Items({ projectItems }) {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, link } = projectItem; // Destructure link here
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>
            <a
              className="portfolio__link"
              href={link} // Correctly use the link here
              target="_blank" // Open link in new tab
              rel="noopener noreferrer" // Prevent security risk
            >
              View Project <FaArrowRight className="link__icon" />
            </a>
          </motion.div>
        );
      })}
    </>
  );
}

export default Items;
