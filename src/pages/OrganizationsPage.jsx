import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ministries } from '../data/ministries';

const OrganizationsPage = () => {
  const { slug } = useParams();
  const selectedOrg = slug ? ministries.find(m => m.slug === slug) : null;

  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="page-hero__content container">
          <span className="page-hero__label">Ministries & Associations</span>
          <h1 className="page-hero__title">{selectedOrg ? selectedOrg.name : 'Parish Organizations'}</h1>
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Organizations</span>
            {selectedOrg && <> <span>/</span> <span>{selectedOrg.name}</span></>}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          {selectedOrg ? (
            <div style={{ maxWidth: '850px', margin: '0 auto', background: 'var(--warm-white)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-gold)' }}>
              <img src={selectedOrg.image} alt={selectedOrg.name} style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }} />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--brown-primary)', marginBottom: '0.75rem' }}>{selectedOrg.name}</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>{selectedOrg.description}</p>
              
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--brown-primary)', marginBottom: '0.5rem' }}>Key Activities & Service</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                {selectedOrg.activities.map((act, idx) => (
                  <li key={idx}>{act}</li>
                ))}
              </ul>

              <div style={{ background: 'var(--cream)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-beige)' }}>
                <p style={{ fontSize: '0.88rem' }}><strong>Contact Person:</strong> {selectedOrg.contact}</p>
                <p style={{ fontSize: '0.88rem' }}><strong>Meeting Schedule:</strong> {selectedOrg.meetingDay}</p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/organizations" className="btn btn--outline">← Back to All Organizations</Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="section-heading">
                <span className="section-heading__label">Fellowship & Service</span>
                <h2 className="section-heading__title">All Parish Organizations</h2>
                <p className="section-heading__subtitle">Discover ministries serving our parish and wider community</p>
              </div>

              <div className="grid-3">
                {ministries.map((org) => (
                  <div key={org.id} style={{ background: 'var(--warm-white)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column' }}>
                    <img src={org.image} alt={org.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--brown-primary)', marginBottom: '0.4rem' }}>{org.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '1rem', flex: 1 }}>{org.description}</p>
                      <Link to={`/organizations/${org.slug}`} className="btn btn--outline" style={{ fontSize: '0.72rem', padding: '0.5rem 1rem', width: '100%', justifyContent: 'center' }}>
                        Read More & Activities
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default OrganizationsPage;
