import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SearchBar from './SearchBar';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1.2,
        type: "spring",
        stiffness: 100
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury beach resort"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="text-center mb-12"
        >
          {/* Decorative Elements */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-8"
            variants={itemVariants}
          >
            <div className="w-16 h-[1px] bg-white/30" />
            <Sparkles className="text-yellow-300/80 w-5 h-5" />
            <div className="w-16 h-[1px] bg-white/30" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wider"
            variants={titleVariants}
          >
            <span className="inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Baja</span>
              <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Tours</span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light tracking-wide"
            variants={itemVariants}
          >
            Experience luxury beyond imagination
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SearchBar />
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.5,
        }}
      >
        <motion.span 
          className="text-white/50 text-xs uppercase tracking-widest mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          Explore
        </motion.span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ChevronDown className="text-white/70 w-8 h-8" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
