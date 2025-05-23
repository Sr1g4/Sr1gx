import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './index.css';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Socials from './components/Socials';
import ThemeToggle from './components/ThemeToggle';
import { BackgroundTransition } from './components/BackgroundTransition';
import ThreeScene from './components/ThreeScene';
import { useEffect, useState } from 'react';

const ColoredTypewriter = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Software Engineer', 'Cloud Architect', 'AI Enthusiast'];
  const colors = ['text-teal-400', 'text-blue-400', 'text-purple-400'];

  return (
    <div className={colors[currentWordIndex]}>
      <Typewriter
        words={words}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onType={(count) => {
          setCurrentWordIndex(count % words.length);
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen text-white transition-all duration-300 relative">
      <div className="fixed inset-0 z-0">
        <ThreeScene />
      </div>
      <BackgroundTransition />
      <Socials />
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 md:pt-48 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
          >
            <h1
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-widest animate-pulse drop-shadow-md"
              style={{
                fontFamily: 'Monoton, cursive',
                letterSpacing: '0.1em',
                textShadow: '0 0 10px rgba(255,255,255,0.5)'
              }}
            >
              Hi, I'm{' '}
              <span
                className="inline-block bg-gradient-to-r from-pink-500 via-cyan-400 to-blue-500 bg-clip-text text-white drop-shadow-lg"
                style={{
                  fontFamily: 'Monoton, cursive',
                  fontWeight: 'bold',
                  textShadow: '0 2px 16px rgba(0,0,0,0.4)'
                }}
              >
                Sri
              </span>
            </h1>

            <h2 className="text-xl md:text-3xl font-medium mb-8">
              <ColoredTypewriter />
            </h2>

            <motion.div 
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 rounded-lg shadow-lg hover:shadow-sky-400/50"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-sky-300 to-sky-400 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-sky-400 group-hover:bg-gradient-to-r group-hover:from-sky-300 group-hover:to-sky-400 rounded-lg"></span>
                <span className="relative flex items-center gap-3 text-black group-hover:text-white">
                  <svg 
                    className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  <span className="text-lg tracking-wide">View Resume</span>
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-sky-300 to-sky-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300 -z-10"></span>
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10L12 16L18 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <animate 
                attributeName="opacity"
                values="1;0.5;1"
                dur="1.5s"
                repeatCount="indefinite" />
            </svg>
          </motion.div>
        </section>

        {/* SCROLL SECTIONS */}
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;

