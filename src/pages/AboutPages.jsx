import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, Calendar, Sparkles, MapPin, CheckCircle, Shield } from 'lucide-react';
import { historyTimeline, parishFacts } from '../data/history';

export const OurParishPage = () => (
  <main className="inner-page">
    <section className="page-hero">
      <div className="page-hero__content container">
        <span className="page-hero__label">Diocese of Mangalore</span>
        <h1 className="page-hero__title">Our Parish</h1>
        <div className="page-hero__breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span>About</span> <span>/</span> <span>Our Parish</span>
        </div>
      </div>
    </section>

    <section className="section section--white">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 className="section-heading__title" style={{ marginBottom: '1.5rem' }}>Welcome to Our Lady of Loretto Parish</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
          Our Lady of Loretto Church, situated in Loretto, Mangalore, is a sacred home of faith, hope and Christian service. Our parish community is dedicated to worshipping God, growing in communion, and spreading Christ's love across the region.
        </p>

        <div className="grid-2" style={{ margin: '2.5rem 0' }}>
          {parishFacts.map((fact, idx) => (
            <div key={idx} style={{ background: 'var(--cream)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-antique)', fontWeight: 600 }}>{fact.label}</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--brown-primary)', marginTop: '0.2rem' }}>{fact.value}</h4>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--brown-primary)', marginBottom: '1rem' }}>Our Parish Mission</h3>
        <p style={{ lineHeight: '1.8' }}>
          To build a vibrant, prayerful Catholic community rooted in the Word of God and the Eucharist, actively engaged in pastoral care, catechism, youth formation, and charitable outreach under the patronage of Our Lady of Loretto.
        </p>
      </div>
    </section>
  </main>
);

export const HistoryPage = () => (
  <main className="inner-page">
    <section className="page-hero">
      <div className="page-hero__content container">
        <span className="page-hero__label">Heritage & Milestones</span>
        <h1 className="page-hero__title">Church History</h1>
        <div className="page-hero__breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span>About</span> <span>/</span> <span>History</span>
        </div>
      </div>
    </section>

    <section className="section section--cream">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__label">Timeline of Faith</span>
          <h2 className="section-heading__title">Historical Milestones</h2>
          <p className="section-heading__subtitle">Journey through the rich foundation and growth of Our Lady of Loretto Parish</p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          {historyTimeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: 'var(--warm-white)',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: 'var(--shadow-soft)',
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '1.5rem',
                alignItems: 'center'
              }}
            >
              <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-beige)', paddingRight: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold-antique)' }}>{item.year}</span>
                <span style={{ display: 'block', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brown-muted)' }}>{item.era}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--brown-primary)', marginBottom: '0.4rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.6' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export const PatronessPage = () => (
  <main className="inner-page">
    <section className="page-hero">
      <div className="page-hero__content container">
        <span className="page-hero__label">Holy Patroness</span>
        <h1 className="page-hero__title">Our Lady of Loretto</h1>
        <div className="page-hero__breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span>About</span> <span>/</span> <span>Our Patroness</span>
        </div>
      </div>
    </section>

    <section className="section section--white">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <img
            src="/images/patroness-mary.jpg"
            alt="Our Lady of Loretto"
            style={{ width: '260px', height: '360px', objectFit: 'cover', borderRadius: 'var(--radius-md)', margin: '0 auto 1.5rem', border: '2px solid var(--gold-antique)', boxShadow: 'var(--shadow-strong)' }}
          />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--gold-antique)' }}>"Our Lady of Loretto, Pray For Us"</h2>
          <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--brown-muted)', marginTop: '0.3rem' }}>Annual Feast Day: December 10</p>
        </div>

        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--brown-primary)', marginBottom: '1rem' }}>The Significance of Our Lady of Loretto</h3>
        <p style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
          The title <em>Our Lady of Loretto</em> refers to the Holy House of Loreto, the sacred dwelling in Nazareth where the Virgin Mary was born, received the Annunciation from the Angel Gabriel, and raised Jesus Christ with St. Joseph.
        </p>
        <p style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
          Our parish in Loretto, Mangalore invokes Mother Mary under this cherished Marian title, seeking her guidance, peace, and maternal intercession for all families in our community.
        </p>

        <div style={{ background: 'var(--cream)', border: '1px solid var(--border-gold)', padding: '2rem', borderRadius: 'var(--radius-md)', marginTop: '2rem' }}>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--brown-primary)', marginBottom: '0.5rem' }}>Prayer to Our Lady of Loretto</h4>
          <p style={{ fontStyle: 'italic', lineHeight: '1.8', color: 'var(--brown-primary)' }}>
            "O Holy Mother of God, Queen of Heaven and Patroness of Our Parish, look with love upon your children gathered under your mantle. Intercede for our families, protect our youth, comfort the sick, and guide our parish community in faithful witness to your Divine Son. Amen."
          </p>
        </div>
      </div>
    </section>
  </main>
);

export const DiocesePage = () => (
  <main className="inner-page">
    <section className="page-hero">
      <div className="page-hero__content container">
        <span className="page-hero__label">Diocesan Identity</span>
        <h1 className="page-hero__title">Diocese of Mangalore</h1>
        <div className="page-hero__breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span>About</span> <span>/</span> <span>Diocese</span>
        </div>
      </div>
    </section>

    <section className="section section--white">
      <div className="container" style={{ maxWidth: '850px' }}>
        <h2 className="section-heading__title" style={{ marginBottom: '1.5rem' }}>Diocese of Mangalore</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Our Lady of Loretto Church operates under the spiritual jurisdiction of the Roman Catholic Diocese of Mangalore, a historic Latin Rite diocese established in 1886.
        </p>

        <div className="grid-2" style={{ gap: '1.5rem' }}>
          <div style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-beige)' }}>
            <Shield size={24} style={{ color: 'var(--gold-antique)', marginBottom: '0.5rem' }} />
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--brown-primary)' }}>Ecclesiastical Region</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '0.4rem' }}>Covering Dakshina Kannada and Udupi districts of Karnataka, with centuries of rich Catholic tradition.</p>
          </div>
          <div style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-beige)' }}>
            <Landmark size={24} style={{ color: 'var(--gold-antique)', marginBottom: '0.5rem' }} />
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--brown-primary)' }}>Pastoral Governance</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '0.4rem' }}>Guided by the Bishop of Mangalore, fostering pastoral care, education, and social service initiatives.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);
