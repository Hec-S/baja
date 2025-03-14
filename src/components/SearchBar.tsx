import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Calendar } from 'lucide-react';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const inputVariants = {
    initial: { scale: 1 },
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <motion.div 
      className="relative backdrop-blur-md bg-white/20 rounded-2xl p-6 shadow-2xl border border-white/10 w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div 
          className="relative"
          variants={inputVariants}
          initial="initial"
          animate={focusedInput === 'destination' ? 'focus' : 'initial'}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onFocus={() => setFocusedInput('destination')}
            onBlur={() => setFocusedInput(null)}
            className="w-full pl-10 pr-4 py-3 bg-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={inputVariants}
          initial="initial"
          animate={focusedInput === 'dates' ? 'focus' : 'initial'}
        >
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Select dates"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            onFocus={() => setFocusedInput('dates')}
            onBlur={() => setFocusedInput(null)}
            className="w-full pl-10 pr-4 py-3 bg-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
        </motion.div>

        <motion.div 
          className="relative"
          variants={inputVariants}
          initial="initial"
          animate={focusedInput === 'travelers' ? 'focus' : 'initial'}
        >
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Travelers"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            onFocus={() => setFocusedInput('travelers')}
            onBlur={() => setFocusedInput(null)}
            className="w-full pl-10 pr-4 py-3 bg-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
        </motion.div>
      </div>
      
      <motion.button 
        className="mt-4 w-full bg-black/90 hover:bg-black text-white py-4 rounded-xl font-medium transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Find My Luxury Escape
      </motion.button>
    </motion.div>
  );
};

export default SearchBar;
