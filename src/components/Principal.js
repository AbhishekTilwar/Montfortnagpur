import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, BookOpen, Heart, Mail, Phone, GraduationCap, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Principal = () => {
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
            Principal's Desk
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Leadership with Vision, Dedication with Purpose
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
          {/* Principal Profile */}
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
                  alt="Bro. Jomon Joy"
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
                <h3 className="text-2xl font-bold text-[#1a2e5a] mb-2">Bro. Jomon Joy</h3>
                <div className="flex items-center gap-2 text-[#c5a059] mb-4">
                  <GraduationCap size={16} />
                  <span className="font-medium">Principal</span>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-[#c5a059]" size={16} />
                    <span>15+ Years in Education</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-[#c5a059]" size={16} />
                    <span>M.Ed., Ph.D. Scholar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-[#c5a059]" size={16} />
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
                    <span className="text-sm">+91 99750 47841</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#c5a059]" size={16} />
                    <span className="text-sm">principal@montfortnagpur.ac.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-[#c5a059]" size={16} />
                    <span className="text-sm">Montfort School, Nagpur</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Principal's Message and Details */}
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
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Welcome Message</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  Dear Parents, Students, and Well-wishers,
                </p>
                <p className="text-lg leading-relaxed">
                  It is with great pleasure and pride that I welcome you to Montfort School Nagpur, 
                  an institution that stands as a beacon of educational excellence and character formation. 
                  As we carry forward the rich legacy of St. Louis Marie de Montfort, we remain committed 
                  to nurturing young minds and shaping future leaders.
                </p>
                <p className="text-lg leading-relaxed">
                  Our mission extends beyond academic excellence to encompass the holistic development 
                  of every child. We believe in creating an environment where students can discover their 
                  potential, develop their talents, and grow into responsible, compassionate, and enlightened 
                  citizens of the world.
                </p>
                <p className="text-lg leading-relaxed">
                  Together with our dedicated team of educators, we strive to provide a learning experience 
                  that is both challenging and supportive, traditional yet innovative, rigorous yet nurturing.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-[#1a2e5a]">
                  With warm regards,<br />
                  Bro. Jomon Joy<br />
                  Principal
                </p>
              </div>
            </motion.div>

            {/* Educational Philosophy */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Educational Philosophy</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Heart,
                      title: 'Child-Centered Approach',
                      description: 'Every child is unique and deserves personalized attention and care.'
                    },
                    {
                      icon: BookOpen,
                      title: 'Excellence in Education',
                      description: 'Striving for highest academic standards through innovative teaching.'
                    },
                    {
                      icon: Users,
                      title: 'Character Building',
                      description: 'Fostering strong moral values and ethical principles.'
                    },
                    {
                      icon: Award,
                      title: 'Holistic Development',
                      description: 'Balancing academics, sports, arts, and spiritual growth.'
                    }
                  ].map((philosophy, index) => (
                    <motion.div 
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <philosophy.icon className="text-[#c5a059]" size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1a2e5a] mb-2">{philosophy.title}</h3>
                        <p className="text-gray-600">{philosophy.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-8 rounded-2xl shadow-lg text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  '100% Board Results for 5 consecutive years',
                  'Excellence in School Education Award 2022',
                  'Best Infrastructure in Central India',
                  'National Level Sports Championship Host',
                  'Innovation in Teaching Methods Award',
                  'Green School Initiative Recognition'
                ].map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Award className="text-[#c5a059] flex-shrink-0" size={20} />
                    <span className="text-gray-200">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Future Vision */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Vision for the Future</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  Looking ahead, we envision Montfort School Nagpur as a center of educational innovation 
                  and excellence that prepares students not just for exams, but for life. Our focus remains on:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-3" />
                    <span>Integrating technology with traditional teaching methods for enhanced learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-3" />
                    <span>Expanding our infrastructure to accommodate modern educational needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-3" />
                    <span>Strengthening our community outreach and social service programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-3" />
                    <span>Developing global partnerships for international exposure</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div 
              className="bg-[#c5a059]/10 p-8 rounded-2xl border-2 border-[#c5a059]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <blockquote className="text-2xl font-serif text-[#1a2e5a] italic text-center">
                "Education is not preparation for life; education is life itself. 
                Our goal is to create lifelong learners who will make a positive difference in the world."
              </blockquote>
              <p className="text-center text-[#c5a059] font-bold mt-4">- Bro. Jomon Joy</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
