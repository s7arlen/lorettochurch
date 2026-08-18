import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ministries } from '../../data/ministries';
import './ParishOrganizationsSection.css';

const ParishOrganizationsSection = () => {
  return (
    <section className="organizations section section--cream" aria-label="Parish Organizations">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__label">Ministries & Fellowship</span>
          <h2 className="section-heading__title">Parish Organizations</h2>
          <p className="section-heading__subtitle">
            Active associations fostering faith, community service and pastoral care
          </p>
        </div>

        <div className="organizations__grid">
          {ministries.slice(0, 6).map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link to={`/organizations/${org.slug}`} className="org-card">
                <div
                  className="org-card__image"
                  style={{ backgroundImage: `url(${org.image})` }}
                  role="img"
                  aria-label={org.name}
                />
                <div className="org-card__overlay" />
                <div className="org-card__content">
                  <h3 className="org-card__title">{org.name}</h3>
                  <p className="org-card__desc">{org.description}</p>
                  <span className="org-card__link">
                    Explore Ministry <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="organizations__cta">
          <Link to="/organizations" className="btn btn--outline">
            View All Parish Organizations
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParishOrganizationsSection;
