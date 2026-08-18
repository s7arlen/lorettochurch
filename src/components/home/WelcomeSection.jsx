import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section className="welcome section section--white" aria-label="Welcome to Our Parish">
      <div className="container">
        <div className="welcome__grid">
          <motion.div
            className="welcome__image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="welcome__image"
              style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/welcome-church.jpg')` }}
              role="img"
              aria-label="Our Lady of Loretto Church exterior"
            />
            <div className="welcome__image-border" aria-hidden="true" />
            <div className="welcome__badge">
              <span className="welcome__badge-year">Diocese of Mangalore</span>
              <span className="welcome__badge-text">Parish Community</span>
            </div>
          </motion.div>

          <motion.div
            className="welcome__content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-heading__label">Peace & Goodness</span>
            <h2 className="welcome__title">Welcome to Our Lady of Loretto</h2>
            <div className="welcome__gold-divider" aria-hidden="true" />
            <h3 className="welcome__subheading">
              A parish community rooted in faith, tradition and service.
            </h3>
            <p className="welcome__text">
              Our Lady of Loretto Church, located in the peaceful locale of Loretto, Mangalore, is a vibrant Catholic parish dedicated to living out the Gospel of Jesus Christ. Under the loving protection of Our Lady of Loretto, our parish family gathers to celebrate the Holy Mass, nourish spiritual life through the Sacraments, and serve one another in Christian love.
            </p>
            <p className="welcome__text">
              Whether you are a lifelong parishioner, a newcomer to the area, or a visitor seeking spiritual peace, we welcome you with open hearts. Join us in worship, fellowship, and ministry as we walk together in faith.
            </p>
            <div className="welcome__cta-wrapper">
              <Link to="/about/our-parish" className="btn btn--primary">
                Discover Our Parish
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
