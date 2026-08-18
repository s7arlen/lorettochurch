import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import QuickAccess from '../components/home/QuickAccess';
import WelcomeSection from '../components/home/WelcomeSection';
import ParishHistorySection from '../components/home/ParishHistorySection';
import OurPatronessSection from '../components/home/OurPatronessSection';
import PriestMessageSection from '../components/home/PriestMessageSection';
import ParishLeadershipSection from '../components/home/ParishLeadershipSection';
import MassScheduleSection from '../components/home/MassScheduleSection';
import ParishOrganizationsSection from '../components/home/ParishOrganizationsSection';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';
import LatestNewsSection from '../components/home/LatestNewsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import SpecialCelebrationsSection from '../components/home/SpecialCelebrationsSection';
import VideoSection from '../components/home/VideoSection';
import GallerySection from '../components/home/GallerySection';
import LocationSection from '../components/home/LocationSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  return (
    <main id="main-content">
      {/* 3. Hero Slider */}
      <HeroSlider />

      {/* 4. Quick Access Circular Cards */}
      <QuickAccess />

      {/* 5. Welcome to Our Lady of Loretto */}
      <WelcomeSection />

      {/* 6. Our Parish & History */}
      <ParishHistorySection />

      {/* 7. Our Patroness */}
      <OurPatronessSection />

      {/* 8. Message from Parish Priest */}
      <PriestMessageSection />

      {/* 9. Parish Leadership */}
      <ParishLeadershipSection />

      {/* 10. Mass Schedule */}
      <MassScheduleSection />

      {/* 11. Parish Organizations */}
      <ParishOrganizationsSection />

      {/* 12. Upcoming Events */}
      <UpcomingEventsSection />

      {/* 13. Latest News */}
      <LatestNewsSection />

      {/* 14. Parish Newsletter */}
      <NewsletterSection />

      {/* 15. Special Celebrations */}
      <SpecialCelebrationsSection />

      {/* 16. Parish Video */}
      <VideoSection />

      {/* 17. Photo Gallery */}
      <GallerySection />

      {/* 18. Location / Google Map */}
      <LocationSection />

      {/* 19. Contact */}
      <ContactSection />
    </main>
  );
};

export default HomePage;
