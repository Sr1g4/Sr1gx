import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = ({ onThemeChange, currentTheme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDark = currentTheme === 'dark';

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    onThemeChange(newTheme);
  };

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={toggleTheme}
        className="relative group"
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated background rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            rotate: isHovered ? -360 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner container with glass effect */}
        <div className="relative p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden">
          {/* Animated particles */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: isDark 
                ? "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)"
                : "radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, transparent 70%)",
            }}
            transition={{ duration: 0.5 }}
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? 'dark' : 'light'}
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                filter: isHovered ? "brightness(1.2)" : "brightness(1)",
              }}
              exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              {isDark ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-yellow-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-gray-800 drop-shadow-[0_0_8px_rgba(31,41,55,0.5)]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 10,
            scale: isHovered ? 1 : 0.9,
          }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-full mt-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-sm text-white whitespace-nowrap border border-white/20 shadow-lg"
        >
          <span className="flex items-center gap-2">
            {isDark ? (
              <>
                <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
                Switch to Light
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-gray-800 animate-pulse" />
                Switch to Dark
              </>
            )}
          </span>
        </motion.div>

        {/* Click ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1.2 : 0,
            opacity: isHovered ? 0 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle; 