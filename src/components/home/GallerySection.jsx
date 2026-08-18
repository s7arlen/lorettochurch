import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Maximize2, ArrowRight } from 'lucide-react';
import { galleryImages, galleryCategories } from '../../data/gallery';
import Lightbox from '../common/Lightbox';
import './GallerySection.css';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handleOpenLightbox = (index) => setLightboxIndex(index);
  const handleCloseLightbox = () => setLightboxIndex(null);
  const handlePrev = () => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  const handleNext = () => setLightboxIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));

  return (
    <section className="gallery-section section section--cream" aria-label="Photo Gallery">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__label">Visual Memories</span>
          <h2 className="section-heading__title">Photo Gallery</h2>
          <p className="section-heading__subtitle">
            Moments of devotion, fellowship and celebrations in our parish
          </p>
        </div>

        {/* Categories */}
        <div className="gallery-section__categories">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`gallery-section__cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="gallery-section__grid">
          {filteredImages.map((img, index) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="gallery-item"
              onClick={() => handleOpenLightbox(index)}
            >
              <img src={img.src} alt={img.alt} className="gallery-item__img" loading="lazy" />
              <div className="gallery-item__overlay">
                <Maximize2 size={24} className="gallery-item__icon" />
                <h3 className="gallery-item__title">{img.title}</h3>
                <span className="gallery-item__cat">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="gallery-section__cta">
          <Link to="/media/gallery" className="btn btn--outline">
            View Full Media Gallery
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxIndex !== null}
          image={lightboxIndex !== null ? filteredImages[lightboxIndex] : null}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
};

export default GallerySection;
