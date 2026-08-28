import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Maximize2, ArrowRight, Camera } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import Lightbox from '../common/Lightbox';
import './GallerySection.css';

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
    <section className="gallery-section section section--white" aria-label="Photo Gallery">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__label">Visual Heritage</span>
          <h2 className="section-heading__title">Photo Gallery</h2>
          <p className="section-heading__subtitle">
            Capturing sacred moments of prayer, liturgical celebrations, and community fellowship
          </p>
        </div>

        {/* Masonry / Grid Container */}
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
              <div
                className="gallery-item__image-bg"
                style={{ backgroundImage: `url(${img.src})` }}
                role="img"
                aria-label={img.alt}
              />
              <div className="gallery-item__burgundy-overlay">
                <div className="gallery-item__icon-wrapper">
                  <Maximize2 size={20} className="gallery-item__icon" />
                </div>
                <h3 className="gallery-item__title">{img.title}</h3>
                <span className="gallery-item__cat">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="gallery-section__cta">
          <Link to="/media/gallery" className="btn btn--outline">
            <Camera size={16} /> View Complete Gallery
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
