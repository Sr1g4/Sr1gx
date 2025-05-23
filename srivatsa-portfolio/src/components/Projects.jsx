import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projectList = [
    {
      title: 'GAN Image Generator',
      tech: 'Python · TensorFlow · AWS',
      description: 'A GAN that generates high-resolution facial images.',
      link: 'https://github.com/yourrepo',
      color: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'AI-Powered QA Automation',
      tech: 'Python · Anthropic · Selenium',
      description: 'Built an LLM-based test code generator for Jira specs.',
      link: 'https://github.com/yourrepo',
      color: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
          <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="currentColor"/>
        </svg>
      )
    }
  ]

  return (
    <motion.section
      className="min-h-screen w-full py-20 px-6 relative overflow-hidden flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Remove background gradient */}
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10 readable-container flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
        >
          Featured Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          {projectList.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-[1px] hover:shadow-2xl transition-all duration-300 w-full flex justify-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative h-full bg-gray-900 p-8 rounded-2xl w-full max-w-md flex flex-col items-center text-center">
                <div className="flex items-start justify-between mb-6 w-full">
                  <div className="text-teal-400 group-hover:text-white transition-colors duration-300 mx-auto">
                    {project.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-6">{project.tech}</p>
                <motion.a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 justify-center"
                  whileHover={{ x: 5 }}
                >
                  View on GitHub
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
