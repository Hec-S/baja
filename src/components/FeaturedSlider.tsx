import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Experience } from '../ExperiencesData';
import { MapPin } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FeaturedSliderProps {
  experiences: Experience[];
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ experiences }) => {
  const [mounted, setMounted] = useState(false);

  // This ensures Swiper only runs on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredExperiences = experiences.filter(exp => exp.featured);

  if (!mounted) return null;

  return (
    <div className="w-full h-[600px] mb-16 relative">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 bg-white/50 hover:bg-white"></span>`;
          },
        }}
        navigation
        loop
        className="w-full h-full rounded-2xl overflow-hidden"
      >
        {featuredExperiences.map((experience) => (
          <SwiperSlide key={experience.id} className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={experience.imageUrl}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl mx-auto text-center"
                >
                  <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-white/20 backdrop-blur-md rounded-full text-white">
                    {experience.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                    {experience.title}
                  </h2>
                  <div className="flex items-center justify-center text-white/80 mb-6">
                    <MapPin size={16} className="mr-1" />
                    <span>{experience.location}</span>
                  </div>
                  <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                    {experience.description}
                  </p>
                  <div className="text-3xl font-light text-white mb-8">
                    {experience.price}
                  </div>
                  <motion.button
                    className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book This Experience
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedSlider;
