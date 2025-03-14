import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../ExperiencesData';
import { MapPin } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <motion.div
      className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={experience.imageUrl} 
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 w-full h-full p-6 flex flex-col justify-end">
        <div className="relative z-10">
          {/* Category Tag */}
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-white/20 backdrop-blur-md rounded-full text-white">
            {experience.category}
          </span>
          
          {/* Title */}
          <h3 className="text-xl font-medium text-white mb-2">{experience.title}</h3>
          
          {/* Location */}
          <div className="flex items-center text-white/80 mb-3">
            <MapPin size={14} className="mr-1" />
            <span className="text-sm">{experience.location}</span>
          </div>
        </div>

        {/* Hover Details */}
        <motion.div 
          className="absolute inset-0 w-full h-full bg-black/70 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-medium text-white mb-2">{experience.title}</h3>
          <p className="text-white/80 text-sm mb-4 line-clamp-3">{experience.description}</p>
          
          {/* Price */}
          <div className="text-2xl font-light text-white mb-4">{experience.price}</div>
          
          {/* VIP Add-ons */}
          <div className="mb-4">
            <h4 className="text-xs uppercase tracking-wider text-white/60 mb-2">VIP Add-ons</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {experience.vipAddons.map((addon, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-white/10 rounded-full text-white"
                >
                  {addon}
                </span>
              ))}
            </div>
          </div>
          
          {/* Button */}
          <motion.button 
            className="mt-2 px-6 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
