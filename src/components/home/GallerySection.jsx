import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Maximize2, ArrowRight } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import Lightbox from '../common/Lightbox';
import './GallerySection.css';

// On the homepage we show only the first 6 images — no filter needed.
// The full filterable gallery is available at /media/gallery.
const HOME_GALLERY_COUNT = 6;

const GallerySection = () => {
  const previewImages = galleryImages.slice(0, HOME_GALLERY_COUNT);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpenLightbox = (index) => setLightboxIndex(index);
  const handleCloseLightbox = () => setLightboxIndex(null);
  const handlePrev = () =>
    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : previewImages.length - 1
    );
  const handleNext = () =>
    setLightboxIndex((prev) =>
      prev < previewImages.length - 1 ? prev + 1 : 0
    );

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

        {/* Grid — no category filter on homepage */}
        <div className="gallery-section__grid">
          {previewImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
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
        </div>

        <div className="gallery-section__cta">
          <Link to="/media/gallery" className="btn btn--outline">
            View Full Media Gallery
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxIndex !== null}
          image={lightboxIndex !== null ? previewImages[lightboxIndex] : null}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
};

export default GallerySection;
