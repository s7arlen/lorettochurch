import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './QuickAccess.css';

const quickAccessItems = [
  {
    id: 'mass-times',
    title: 'MASS TIMES',
    subtitle: 'View Mass schedules and timings.',
    image: '/images/quick-mass.jpg',
    link: '/faith/mass-timings',
  },
  {
    id: 'sacraments',
    title: 'SACRAMENTS',
    subtitle: 'Learn about sacraments and procedures.',
    image: '/images/quick-sacraments.jpg',
    link: '/faith/sacraments',
  },
  {
    id: 'events',
    title: 'PARISH EVENTS',
    subtitle: 'Upcoming celebrations and activities.',
    image: '/images/quick-events.jpg',
    link: '/events',
  },
  {
    id: 'groups',
    title: 'PARISH GROUPS',
    subtitle: 'Discover our organizations & ministries.',
    image: '/images/quick-groups.jpg',
    link: '/organizations',
  },
];

const QuickAccess = () => {
  return (
    <section className="quick-access section section--cream" aria-label="Quick Access">
      <div className="container">
        <div className="quick-access__grid">
          {quickAccessItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={item.link} className="quick-card">
                <div className="quick-card__image-container">
                  <div
                    className="quick-card__image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="quick-card__gold-ring" aria-hidden="true" />
                </div>
                <h3 className="quick-card__title">{item.title}</h3>
                <p className="quick-card__subtitle">{item.subtitle}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
