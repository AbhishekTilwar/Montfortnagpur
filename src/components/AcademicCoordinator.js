import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, GraduationCap, Calendar, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AcademicCoordinator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative h-96 bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] flex items-center justify-center overflow-hidden mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(197, 160, 89, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(197, 160, 89, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(197, 160, 89, 0.2) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Message from Academic Coordinator
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Leading Academic Excellence and Innovation
          </motion.p>
        </div>
      </motion.section>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-[#1a2e5a] hover:text-[#c5a059] transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Coordinator Profile */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-8 space-y-6">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                  alt="Academic Coordinator"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1a2e5a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-[#1a2e5a] mb-2">Dr. Priya Sharma</h3>
                <div className="flex items-center gap-2 text-[#c5a059] mb-4">
                  <GraduationCap size={16} />
                  <span className="font-medium">Academic Coordinator</span>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-[#c5a059]" size={16} />
                    <span>15+ Years in Education</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-[#c5a059]" size={16} />
                    <span>M.Phil., M.Ed., Ph.D.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-[#c5a059]" size={16} />
                    <span>Educational Leadership</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-[#1a2e5a] p-6 rounded-2xl shadow-lg text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-lg font-bold text-[#c5a059] mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#c5a059]" size={16} />
                    <span className="text-sm">+91 99750 47844</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#c5a059]" size={16} />
                    <span className="text-sm">academic@montfortnagpur.ac.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-[#c5a059]" size={16} />
                    <span className="text-sm">Available for Students</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Message and Details */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome Message */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Message</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  Dear Students, Parents, and Faculty,
                </p>
                <p className="text-lg leading-relaxed">
                  As the Academic Coordinator of Montfort School Nagpur, I am honored to lead our academic 
                  programs that have consistently delivered excellence in education. Our commitment to academic 
                  rigor, combined with innovative teaching methodologies, ensures that every student receives 
                  the best possible education.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe in nurturing not just academic excellence but also character development, 
                  critical thinking, and problem-solving skills. Our curriculum is designed to prepare students 
                  for the challenges of the modern world while instilling values that will guide them throughout 
                  their lives.
                </p>
                <p className="text-lg leading-relaxed">
                  I work closely with our dedicated team of educators to continuously improve our teaching 
                  methods, update our curriculum, and provide the best learning environment for our students. 
                  Together, we strive to create an educational experience that is both enriching and empowering.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-[#1a2e5a]">
                  With commitment to excellence,<br />
                  Dr. Priya Sharma<br />
                  Academic Coordinator
                </p>
              </div>
            </motion.div>

            {/* Academic Vision */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Academic Vision</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Excellence in Education',
                    description: 'Maintaining highest standards of academic achievement through quality teaching and assessment.'
                  },
                  {
                    title: 'Innovative Teaching',
                    description: 'Implementing modern pedagogical approaches and technology-enhanced learning.'
                  },
                  {
                    title: 'Holistic Development',
                    description: 'Focusing on overall development including academics, arts, sports, and character building.'
                  },
                  {
                    title: 'Continuous Improvement',
                    description: 'Regular curriculum review and faculty development programs to stay ahead.'
                  }
                ].map((vision, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-[#c5a059]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1a2e5a] mb-2">{vision.title}</h3>
                      <p className="text-gray-600">{vision.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Academic Initiatives */}
            <motion.div 
              className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-8 rounded-2xl shadow-lg text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Academic Initiatives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Smart Classroom Implementation',
                  'Digital Learning Resources',
                  'STEM Education Programs',
                  'Language Enhancement Labs',
                  'Remedial Teaching Support',
                  'Gifted Student Programs'
                ].map((initiative, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Award className="text-[#c5a059] flex-shrink-0" size={20} />
                    <span className="text-gray-200">{initiative}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCoordinator;
