import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ShieldAlert, ArrowRight } from 'lucide-react';
import { massTimes } from '../../data/massTimes';
import './MassScheduleSection.css';

const MassScheduleSection = () => {
  const [activeTab, setActiveTab] = useState('sunday');

  return (
    <section className="mass-schedule section section--white" aria-label="Mass Schedule">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__label">Holy Eucharist & Prayer</span>
          <h2 className="section-heading__title">Mass Schedule</h2>
          <p className="section-heading__subtitle">
            Join us in worship and prayer at Our Lady of Loretto Church
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mass-schedule__tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'sunday'}
            className={`mass-schedule__tab ${activeTab === 'sunday' ? 'active' : ''}`}
            onClick={() => setActiveTab('sunday')}
          >
            <Calendar size={16} />
            <span>Sunday Masses</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'weekday'}
            className={`mass-schedule__tab ${activeTab === 'weekday' ? 'active' : ''}`}
            onClick={() => setActiveTab('weekday')}
          >
            <Clock size={16} />
            <span>Weekday Masses</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'special'}
            className={`mass-schedule__tab ${activeTab === 'special' ? 'active' : ''}`}
            onClick={() => setActiveTab('special')}
          >
            <ShieldAlert size={16} />
            <span>Special & Confessions</span>
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mass-schedule__content-box"
        >
          {activeTab === 'sunday' && (
            <div className="mass-schedule__table-wrapper">
              <table className="mass-schedule__table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Language</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {massTimes.sunday.map((item, idx) => (
                    <tr key={idx}>
                      <td className="mass-schedule__time">{item.time}</td>
                      <td className="mass-schedule__lang">{item.language}</td>
                      <td className="mass-schedule__note">{item.note || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'weekday' && (
            <div className="mass-schedule__table-wrapper">
              <table className="mass-schedule__table">
                <thead>
                  <tr>
                    <th>Days</th>
                    <th>Time</th>
                    <th>Language</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {massTimes.weekday.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.day}</td>
                      <td className="mass-schedule__time">{item.time}</td>
                      <td className="mass-schedule__lang">{item.language}</td>
                      <td className="mass-schedule__note">{item.note || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'special' && (
            <div className="mass-schedule__special-grid">
              <div className="mass-schedule__special-col">
                <h4 className="mass-schedule__special-heading">Special Masses & Devotions</h4>
                <ul className="mass-schedule__special-list">
                  {massTimes.special.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.occasion}:</strong> {item.time} {item.note && `(${item.note})`}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mass-schedule__special-col">
                <h4 className="mass-schedule__special-heading">Sacrament of Reconciliation (Confession)</h4>
                <ul className="mass-schedule__special-list">
                  {massTimes.confessions.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.day}:</strong> {item.time} {item.note && `(${item.note})`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </motion.div>

        <div className="mass-schedule__footer-cta">
          <Link to="/faith/mass-timings" className="btn btn--primary">
            View Mass & Sacraments Page
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MassScheduleSection;
