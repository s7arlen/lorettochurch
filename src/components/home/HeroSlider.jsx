import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/hero-exterior.jpg`,
    label: 'Welcome to Our Parish',
    title: 'Our Lady of Loretto Church',
    subtitle: 'A community united in faith, hope and love.',
    cta: { text: 'Discover Our Parish', to: '/about/our-parish' },
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/hero-interior.jpg`,
    label: 'A Place of Prayer',
    title: 'A Community of Faith',
    subtitle: 'Growing together in Christ, rooted in tradition.',
    cta: { text: 'Explore Our Parish', to: '/parish/parish-priest' },
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/hero-marian.jpg`,
    label: 'Our Patroness',
    title: 'Our Lady of Loretto',
    subtitle: 'Guide us and pray for us, O gracious Mother.',
    cta: { text: 'Our Patroness', to: '/about/our-patroness' },
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}images/hero-community.jpg`,
    label: 'One Parish, One Family',
    title: 'Faith • Fellowship • Service',
    subtitle: 'Together we celebrate, serve and grow.',
    cta: { text: 'View Events', to: '/events' },
  },
];

const HeroSlider = () => {
  return (
    <section className="hero" aria-label="Hero image carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        speed={1200}
        className="hero__swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="hero__slide">
            <div
              className="hero__image"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={`Church photo: ${slide.title}`}
            />
            <div className="hero__overlay" aria-hidden="true" />
            <div className="hero__content-wrapper">
              <div className="hero__content">
                <p className="hero__label">{slide.label}</p>
                <h2 className="hero__title">{slide.title}</h2>
                <div className="hero__gold-line" aria-hidden="true" />
                <p className="hero__subtitle">{slide.subtitle}</p>
                <Link to={slide.cta.to} className="hero__cta btn btn--outline-light">
                  {slide.cta.text}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
