import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../ExperiencesData';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="w-full backdrop-blur-md bg-white/10 rounded-xl p-2 flex flex-wrap justify-center gap-2 mb-8 shadow-lg">
      <motion.button
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
          selectedCategory === null 
            ? 'text-white' 
            : 'text-white/60 hover:text-white'
        }`}
        onClick={() => onSelectCategory(null)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All Experiences
        {selectedCategory === null && (
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-lg -z-10"
            layoutId="categoryBackground"
            initial={false}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
      </motion.button>

      {categories.map((category) => (
        <motion.button
          key={category}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
            selectedCategory === category 
              ? 'text-white' 
              : 'text-white/60 hover:text-white'
          }`}
          onClick={() => onSelectCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
          {selectedCategory === category && (
            <motion.div
              className="absolute inset-0 bg-white/10 rounded-lg -z-10"
              layoutId="categoryBackground"
              initial={false}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
