import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const backgrounds = [
  {
    image: '/PhillyBackground.png',
    title: 'Philadelphia',
    font: "'Monoton', cursive"
  },
  {
    image: '/NewYorkBackground.png',
    title: 'New York',
    font: "'Bebas Neue', sans-serif"
  },
  {
    image: '/ItalkBackground.png',
    title: 'Italy',
    font: "'Dancing Script', cursive"
  }
];

export function BackgroundTransition() {
  const { scrollYProgress } = useScroll();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate opacity for each background
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.7, 0.8], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest < 0.4) setCurrentIndex(0);
      else if (latest < 0.8) setCurrentIndex(1);
      else setCurrentIndex(2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      {backgrounds.map((bg, index) => (
        <motion.div
          key={bg.image}
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: index === 0 ? opacity1 : index === 1 ? opacity2 : opacity3,
            backgroundImage: `url(${bg.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1)',
            zIndex: -1
          }}
        />
      ))}

      {/* Centered Location Title Overlay */}
      <motion.div
        className="fixed left-1/2 bottom-10 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="backdrop-blur-md bg-black/50 rounded-xl px-8 py-4 shadow-lg flex flex-col items-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-1 text-white drop-shadow"
            style={{
              fontFamily: backgrounds[currentIndex].font,
              letterSpacing: '0.05em',
              textShadow: '0 2px 16px rgba(0,0,0,0.4)'
            }}
          >
            {backgrounds[currentIndex].title}
          </h2>
          <p className="text-lg md:text-xl text-gray-200">{backgrounds[currentIndex].description}</p>
        </div>
      </motion.div>
    </div>
  );
}