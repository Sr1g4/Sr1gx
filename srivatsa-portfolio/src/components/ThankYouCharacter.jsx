import { motion } from 'framer-motion';

const ThankYouCharacter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="fixed bottom-8 right-8 z-50"
    >
      {/* Speech Bubble */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-4 shadow-lg border border-white/20"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-white text-lg font-medium"
        >
          Thanks for visiting my site! 👋
        </motion.p>
        {/* Speech bubble triangle */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white/10 backdrop-blur-md transform rotate-45 border-r border-b border-white/20" />
      </motion.div>

      {/* Character */}
      <motion.div
        className="relative w-16 h-16"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Head */}
        <motion.div
          className="absolute w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Eyes */}
          <div className="absolute top-4 left-3 w-2 h-2 bg-white rounded-full" />
          <div className="absolute top-4 right-3 w-2 h-2 bg-white rounded-full" />
          {/* Smile */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-white rounded-full" />
        </motion.div>
        
        {/* Body */}
        <motion.div
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ThankYouCharacter; 