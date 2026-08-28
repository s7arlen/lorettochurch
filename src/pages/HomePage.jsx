import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

import HeroSlider from '../components/home/HeroSlider';
import MassTimesStrip from '../components/home/MassTimesStrip';
import WelcomeSection from '../components/home/WelcomeSection';
import OurPatronessSection from '../components/home/OurPatronessSection';
import PriestMessageSection from '../components/home/PriestMessageSection';
import SpecialCelebrationsSection from '../components/home/SpecialCelebrationsSection';
import GallerySection from '../components/home/GallerySection';
import LocationSection from '../components/home/LocationSection';

import { events } from '../data/events';
import { news } from '../data/news';

import './HomePage.css';

/* ---- Inline Event Item ---- */
const EventItem = ({ item, index }) => (
  <motion.div
    className="home-event-item"
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.09 }}
  >
    <div className="home-event-item__date">
      <span className="home-event-item__day">{item.day}</span>
      <span className="home-event-item__month">{item.month}</span>
    </div>
    <div className="home-event-item__body">
      <span className="home-event-item__category">{item.category}</span>
      <h3 className="home-event-item__title">
        <Link to={`/events#event-${item.id}`}>{item.title}</Link>
      </h3>
      <div className="home-event-item__meta">
        <span><Clock size={12} aria-hidden="true" /> {item.time}</span>
        <span><MapPin size={12} aria-hidden="true" /> {item.location}</span>
      </div>
    </div>
  </motion.div>
);

/* ---- Inline News Item ---- */
const NewsItem = ({ item, index }) => (
  <motion.article
    className="home-news-item"
    initial={{ opacity: 0, x: 16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.09 }}
  >
    <div className="home-news-item__image-col">
      <div
        className="home-news-item__image"
        style={{ backgroundImage: `url(${item.image})` }}
        role="img"
        aria-label={item.title}
      />
    </div>
    <div className="home-news-item__body">
      <div className="home-news-item__meta">
        <span className="home-news-item__category">{item.category}</span>
        <span className="home-news-item__date">
          <Calendar size={11} aria-hidden="true" /> {item.displayDate}
        </span>
      </div>
      <h3 className="home-news-item__title">
        <Link to={`/news#${item.slug}`}>{item.title}</Link>
      </h3>
      <p className="home-news-item__excerpt">{item.excerpt}</p>
    </div>
  </motion.article>
);

/* ================================================================
   HOME PAGE
   Sections (in order):
   1. Hero Slider
   2. Mass Times Strip
   3. Welcome / About
   4. Our Patroness
   5. Priest's Message
   6. Events + News (two-column)
   7. Special Celebrations Banner
   8. Gallery Highlight
   9. Location
================================================================ */
const HomePage = () => {
  return (
    <main id="main-content">

      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Welcome / About */}
      <WelcomeSection />

      {/* 4. Our Patroness */}
      <OurPatronessSection />

      {/* 5. Priest's Message */}
      <PriestMessageSection />

      {/* 6. Events + News — two-column combined layout */}
      <section className="home-updates" aria-label="Upcoming Events and Latest News">
        <div className="container">
          <div className="home-updates__grid">

            {/* Left: Upcoming Events */}
            <div className="home-updates__col">
              <div className="home-updates__col-heading">
                <span className="section-heading__label">Calendar of Faith</span>
                <h2>Upcoming Events</h2>
              </div>

              <div className="home-updates__items">
                {events.slice(0, 3).map((item, index) => (
                  <EventItem key={item.id} item={item} index={index} />
                ))}
              </div>

              <div className="home-updates__cta">
                <Link to="/events" className="btn btn--outline">
                  All Events <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right: Latest News */}
            <div className="home-updates__col">
              <div className="home-updates__col-heading">
                <span className="section-heading__label">Announcements & Updates</span>
                <h2>Latest News</h2>
              </div>

              <div className="home-updates__items">
                {news.slice(0, 3).map((item, index) => (
                  <NewsItem key={item.id} item={item} index={index} />
                ))}
              </div>

              <div className="home-updates__cta">
                <Link to="/news" className="btn btn--outline">
                  All News <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Special Celebrations Banner */}
      <SpecialCelebrationsSection />

      {/* 8. Gallery Highlight (simplified — 6 photos, no filter) */}
      <GallerySection />

      {/* 9. Mass Times Strip — sits above the map as "Plan Your Visit" info */}
      <MassTimesStrip />

      {/* 10. Location */}
      <LocationSection />

    </main>
  );
};

export default HomePage;
