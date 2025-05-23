import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen py-20 px-6 text-white relative overflow-hidden"
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

      <div className="max-w-4xl mx-auto relative z-10 readable-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            About Me
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm Srivatsa — a passionate builder of cloud-native systems, automation tools, and intuitive UIs.
            With expertise in cloud architecture and AI, I create solutions that are both powerful and user-friendly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Skills</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Cloud Architecture (AWS, Azure)</li>
              <li>• Full-Stack Development</li>
              <li>• AI/ML Implementation</li>
              <li>• DevOps & Automation</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Interests</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Cloud-Native Technologies</li>
              <li>• AI & Machine Learning</li>
              <li>• System Architecture</li>
              <li>• Open Source Projects</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
