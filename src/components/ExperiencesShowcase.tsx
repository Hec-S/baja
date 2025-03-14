import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../ExperiencesData';
import CategoryFilter from './CategoryFilter';
import FeaturedSlider from './FeaturedSlider';
import ExperienceCard from './ExperienceCard';

const ExperiencesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter experiences based on selected category
  const filteredExperiences = selectedCategory
    ? experiences.filter(exp => exp.category === selectedCategory)
    : experiences;

  return (
    <section className="py-20 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Luxury Experiences
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked selection of exclusive experiences designed for the discerning traveler.
          </p>
        </motion.div>

        {/* Category Filter */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Featured Slider - only show if no category is selected */}
        {!selectedCategory && <FeaturedSlider experiences={experiences} />}

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map(experience => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-300">
              No experiences found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperiencesShowcase;
