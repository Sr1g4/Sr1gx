import { motion } from 'framer-motion';
import ThankYouCharacter from './ThankYouCharacter';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:gadicherlasri@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Sr1g4',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/srivatsa-gadicherla/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    }
  ];

  return (
    <motion.section
      className="min-h-screen w-full py-20 px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Remove background gradient */}
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 readable-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl mb-8 text-center"
        >“Logic presumes a separation of subject from object; therefore logic is not final wisdom. This is Zen. This is my motorcycle maintenance.” - Robert M. Pirsig, Zen and the Art of Motorcycle

        Hello I am Sri; an AWS Certified Solutions Architect and full-stack software engineer passionate about building secure, scalable, and high-performing cloud-native applications that solve real-world problems.
        
        Currently, I work at IONIX AI and Proton Software Services, where I architect robust AWS infrastructures supporting advanced AI applications. From configuring EC2, IAM, Auto Scaling, and Load Balancers to deploying containerized applications on ECS/EKS, I've built end-to-end systems that deliver fast, reliable performance. I specialize in Java (MVC), Python, and automation using Selenium, with hands-on experience streamlining backend workflows and ensuring 24/7 availability using CloudWatch, Lambda, CodeBuild, and more. In previous roles, I created impactful solutions—from a Python-based Excel batch tool as a Research Assistant at Temple University to a productivity-boosting chatbot built with React and Node.js. Whether it's tuning AI prompts for optimal NLP accuracy, automating workflows, or resolving tricky SSL/DNS challenges, I thrive in dynamic environments where cloud meets innovation. Outside of tech, I'm an avid football fan and love drawing parallels between high-performance teams and high-performance systems. Just like in sports, I believe every line of code should serve a purpose, adapt under pressure, and contribute to the bigger picture. Let's connect if you're passionate about cloud innovation, AI integration, or want to talk AWS over a game-day chat!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-10 py-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-5xl hover:text-teal-400 transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Add the thank you character */}
      <ThankYouCharacter />
    </motion.section>
  );
};

export default Contact;
