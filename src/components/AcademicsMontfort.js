import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Award, Users, Target, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AcademicsMontfort = () => {
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
            Academics @ Montfort
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Excellence in Education Through Innovation and Dedication
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
        {/* Introduction */}
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <motion.div 
              className="w-20 h-20 bg-[#1a2e5a] rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="text-white" size={40} />
            </motion.div>
            <h2 className="text-4xl font-bold text-[#1a2e5a] mb-4">Academic Excellence</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 text-center">
            <p className="text-lg leading-relaxed">
              At Montfort School Nagpur, we are committed to providing academic excellence through innovative 
              teaching methods, comprehensive curriculum, and dedicated faculty. Our academic programs are 
              designed to nurture intellectual curiosity, critical thinking, and holistic development.
            </p>
          </div>
        </motion.div>

        {/* Academic Philosophy */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: BookOpen,
              title: 'Comprehensive Curriculum',
              description: 'Well-structured curriculum that balances academics, arts, and physical education.'
            },
            {
              icon: Users,
              title: 'Expert Faculty',
              description: 'Dedicated and experienced teachers committed to student success.'
            },
            {
              icon: Target,
              title: 'Result-Oriented Approach',
              description: 'Focus on achieving academic excellence through systematic evaluation.'
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-16 h-16 bg-[#1a2e5a]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c5a059]/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="text-[#1a2e5a] group-hover:text-[#c5a059]" size={32} />
              </motion.div>
              <h3 className="text-xl font-bold text-[#1a2e5a] mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Programs */}
        <motion.div 
          className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-12 rounded-3xl shadow-xl text-white mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Pre-Primary Education',
              'Primary School (Grades 1-5)',
              'Middle School (Grades 6-8)',
              'High School (Grades 9-10)',
              'Higher Secondary (Grades 11-12)',
              'Co-curricular Activities',
              'Sports & Physical Education',
              'Value Education'
            ].map((program, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-[#c5a059]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-[#c5a059]" size={24} />
                </div>
                <p className="text-gray-200">{program}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Achievements */}
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#c5a059] mb-4">Board Results</h3>
              {[
                '100% Pass Rate in Board Examinations',
                '90%+ Students Score First Division',
                'Subject Toppers in Regional Level',
                'Consistent Improvement in Performance'
              ].map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-[#c5a059] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#c5a059] mb-4">Competitions</h3>
              {[
                'National Level Science Olympiad Winners',
                'State Level Mathematics Competition',
                'Inter-School Debate Championships',
                'Cultural and Sports Achievements'
              ].map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-[#c5a059] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicsMontfort;
