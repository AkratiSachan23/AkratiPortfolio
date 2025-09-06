import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Rocket, Brain } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Skilled in React, TypeScript, and modern CSS frameworks",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Rocket,
      title: "Backend Engineering",
      description: "Proficient in Node.js, Python, databases, and cloud architecture",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences with modern design principles",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions with TensorFlow, PyTorch, and OpenAI",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00F5FF 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #b096edff 1px, transparent 1px)`,
          backgroundSize: '5px 5px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I’m an AI & Full-Stack Developer passionate about building intelligent applications that solve real-world problems. With experience spanning modern frontend frameworks to backend systems and AI-driven solutions, I bring ideas to life by combining creativity with technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <motion.div
                  className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 p-1"
                  whileHover={{ scale: 1.00, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <img
                      src="/photo.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Creative Developer
                </h3>
                <p className="text-gray-300 text-center">
                  Experience in building scalable applications and beautiful user interfaces
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.gradient} mb-4`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: '2023', title: 'Started College Journey', company: 'Began learning AI & ML fundamentals' },
              { year: 'Jun 2024', title: 'AI Intern', company: 'Infosys Springboard' },
              { year: 'Jun 2025', title: 'Research Intern', company: 'DRDO – ISSA' }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-cyan-400 font-bold mb-2">{item.year}</div>
                  <div className="text-white font-semibold mb-1">{item.title}</div>
                  <div className="text-gray-300">{item.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;