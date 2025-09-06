import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      title: "Leave Management System",
      description: "Leave Management System: A modern, responsive web application that automates leave requests, approvals, and tracking for efficient workforce management.",
      image: "https://images.pexels.com/photos/5668839/pexels-photo-5668839.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
      category: "web",
      github: "https://github.com/AkratiSachan23/Leave-Management-System",
      demo: "https://leavemanagementsys.netlify.app/"
    },
    {
      id: 2,
      title: "Airline Booking Market Demand Analyzer",
      description: "IA comprehensive web application for analyzing airline booking market demand trends with real-time data integration and AI-powered insights.",
      image: "https://images.pexels.com/photos/6862444/pexels-photo-6862444.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js Powered by OpenAI", "Aviation Stack", "Alpha Vantage APIs"],
      category: "web",
      github: "https://github.com/AkratiSachan23/Airline-Booking-Market-Demand-Analyzer",
      demo: "https://visionary-stardust-075a52.netlify.app/"
    },
    {
      id: 3,
      title: "Soccer Player Re-Identification System",
      description: "Built a Soccer Player Re-Identification System that combines YOLOv11, deep feature embeddings, and OCR to track players consistently across video frames.",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["YOLOv11", "OSNet", "OCR", "Computer Vision", "Deep Learning"],
      category: "ai",
      github: "https://github.com/AkratiSachan23/soccer-player-reid",
      demo: "#"
    },
    {
      id: 4,
      title: "Hate Speech Detection System",
      description: "AI-powered system to detect and classify hate speech on social media using SVM, LSTM, and BERT embeddings.",
      image: "https://images.pexels.com/photos/31513101/pexels-photo-31513101.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Python", "NLP", "SVM", "LSTM", "BERT", "Scikit-learn"],
      category: "ai",
      github: "https://github.com/spring-board-b2-hate-speech/Group-3/tree/Akrati-Branch",
      demo: "#"
    },
    {
      id: 5,
      title: "ElectCode: Secure Biometric Blockchain Voting",
      description: "Decentralized e-voting platform integrating blockchain, face recognition, and fingerprint authentication for secure and transparent elections.",
      image: "https://images.pexels.com/photos/2698473/pexels-photo-2698473.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tags: ["Blockchain", "Biometrics", "Face Recognition", "Fingerprint Authentication", "React", "FastAPI"],
      category: "web",
      github: "https://github.com/AkratiSachan23/voting_System_",  
      demo: "#"
    },
    {
      id: 6,
      title: "Hand Gesture Controlled Virtual Mouse",
      description: "An innovative virtual mouse system that uses hand gestures detected via webcam for controlling pointer movements and clicks.",
      image: "https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tags: ["Python", "MediaPipe", "PyAutoGUI", "Computer Vision"],
      category: "ai",
      github: "https://github.com/AkratiSachan23/HandGestureMOUSE",
      demo: "#"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    
    { id: 'ai', name: 'AI/ML' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />

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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work featuring cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;